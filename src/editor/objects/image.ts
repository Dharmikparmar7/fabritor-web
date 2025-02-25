import { fabric } from "fabric";
import { uuid } from "@/utils";
import { message } from "antd";

export const loadImageDom = async (url) => {
  return new Promise((resolve, reject) => {
    fabric.util.loadImage(
      url,
      (img) => {
        if (img) {
          return resolve(img);
        }
        message.error("加载图片失败");
        return reject();
      },
      null,
      "anonymous",
    );
  });
};

export const loadImage = async (imageSource) => {
  if (typeof imageSource === "string") {
    return new Promise<fabric.Image>((resolve, reject) => {
      fabric.Image.fromURL(
        imageSource,
        (img) => {
          if (!img) {
            message.error("加载图片失败");
            reject();
            return;
          }
          resolve(img);
        },
        {
          crossOrigin: "anonymous",
        },
      );
    });
  }
  return Promise.resolve(new fabric.Image(imageSource));
};

export const createClipRect = (object, options = {}) => {
  const width = object.getScaledWidth();
  const height = object.getScaledHeight();
  return new fabric.Rect({
    left: -width / 2,
    top: -height / 2,
    width,
    height,
    ...options,
  });
};

export const createImage = async (options) => {
  const { imageSource, canvas, ...rest } = options || {};

  let img!: fabric.Image;
  try {
    img = await loadImage(imageSource);
  } catch (e) {
    console.log(e);
  }

  if (!img) return null;

  img.set({
    ...rest,
    paintFirst: "fill",
    id: uuid(),
  });

  canvas.viewportCenterObject(img);
  canvas.add(img);
  canvas.setActiveObject(img);
  canvas.requestRenderAll();

  return img;
};

export const createFImage = async (options) => {
  const { imageSource, canvas } = options || {};

  let img!: fabric.Image;
  try {
    img = await loadImage(imageSource);
  } catch (e) {
    console.log(e);
  }

  if (!img) return;

  // @ts-ignore
  const fimg = new fabric.FImage({
    image: img,
    id: uuid(),
  });

  canvas.viewportCenterObject(fimg);
  canvas.add(fimg);
  canvas.setActiveObject(fimg);
  canvas.requestRenderAll();
};

export const createUrlImage = (options) => {
  const { imageSource, canvas, callback } = options || {};

  try {
    fabric.Image.fromURL(
      imageSource,
      (img) => {
        if (!img) {
          console.warn("Failed to load image.");
          return undefined;
        }

        (img as any).id = uuid();

        // Get canvas dimensions
        const canvasWidth = canvas.getWidth();
        const canvasHeight = canvas.getHeight();

        // Scale the image if it's wider than the canvas
        const scaleFactor =
          img.width > canvasWidth ? canvasWidth / img.width : 1;

        img.scale(scaleFactor); // Scale proportionally
        img.set({
          left: canvasWidth / 2,
          top: canvasHeight / 2,
          originX: "center",
          originY: "center",
        });

        canvas.add(img);
        canvas.setActiveObject(img);

        // Ensure rendering completes
        requestAnimationFrame(() => {
          canvas.requestRenderAll();
          callback && callback();
          return true;
        });
      },
      { crossOrigin: "anonymous" },
    );
  } catch (e) {
    console.error("Error creating Fabric.js image:", e);
  }
};
