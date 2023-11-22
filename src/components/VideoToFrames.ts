export enum VideoToFramesMethod {
    fps,
    totalFrames
  }
  
  export class VideoToFrames {
    public static getFrames(
      videoUrl: string,
      amount: number,
      type: VideoToFramesMethod = VideoToFramesMethod.fps
    ): Promise<{ frameNumber: number; imageData: string }[]> {
      return new Promise<{ frameNumber: number; imageData: string }[]>(
        (
          resolve: (frames: { frameNumber: number; imageData: string }[]) => void,
          reject: (error: string) => void
        ) => {
          let frames: { frameNumber: number; imageData: string }[] = [];
          let canvas: HTMLCanvasElement = document.createElement("canvas");
          //@ts-ignore
          let context: CanvasRenderingContext2D = canvas.getContext("2d");
          let duration: number;
  
          let video = document.createElement("video");
          video.preload = "auto";
          let that = this;
          video.addEventListener("loadeddata", async function () {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            duration = video.duration;
  
            let totalFrames: number = amount;
            if (type === VideoToFramesMethod.fps) {
              totalFrames = duration * amount;
            }
            for (let frameNumber = 1; frameNumber <= totalFrames; frameNumber++) {
              const imageData = await that.getVideoFrame(
                video,
                context,
                canvas,
                (frameNumber - 1) / totalFrames
              );
              frames.push({ frameNumber, imageData });
            }
            resolve(frames);
          });
          video.src = videoUrl;
          video.load();
        }
      );
    }
  
    private static getVideoFrame(
      video: HTMLVideoElement,
      context: CanvasRenderingContext2D,
      canvas: HTMLCanvasElement,
      progress: number
    ): Promise<string> {
      return new Promise(
        (resolve: (frame: string) => void, reject: (error: string) => void) => {
          let eventCallback = () => {
            video.removeEventListener("seeked", eventCallback);
            this.storeFrame(video, context, canvas, resolve);
          };
          video.addEventListener("seeked", eventCallback);
          video.currentTime = progress * video.duration;
        }
      );
    }
  
    private static storeFrame(
      video: HTMLVideoElement,
      context: CanvasRenderingContext2D,
      canvas: HTMLCanvasElement,
      resolve: (frame: string) => void
    ) {
      context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
      resolve(canvas.toDataURL());
    }
  }
  