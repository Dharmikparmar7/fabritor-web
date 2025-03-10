import { fabric } from 'fabric';
import { changeHeight } from '@/utils/helper';

// @ts-ignore
const { controlsUtils } = fabric;

export const initFTextControl = () => {
  const objectControls = fabric.Object.prototype.controls;

  if (fabric.Rect) {
    // @ts-ignore
    const ftextControl: any = (fabric.FText.prototype.controls = {});
    ftextControl.tr = objectControls.tr;
    ftextControl.br = objectControls.br;
    ftextControl.tl = objectControls.tl;
    ftextControl.bl = objectControls.bl;
    // ftextControl.mt = objectControls.mt;
    // ftextControl.mb = objectControls.mb;
    ftextControl.mtr = objectControls.mtr;
    ftextControl.copy = objectControls.copy;
    ftextControl.del = objectControls.del;
    ftextControl.edit = objectControls.edit;

    ftextControl.ml = new fabric.Control({
      x: -0.5,
      y: 0,
      offsetX: -1,
      actionHandler: controlsUtils.changeWidth,
      cursorStyleHandler: objectControls.ml.cursorStyleHandler,
      actionName: 'resizing',
      render: objectControls.ml.render,
    });

    ftextControl.mr = new fabric.Control({
      x: 0.5,
      y: 0,
      offsetX: 1,
      actionHandler: controlsUtils.changeWidth,
      cursorStyleHandler: objectControls.mr.cursorStyleHandler,
      actionName: 'resizing',
      render: objectControls.mr.render,
    });
  }
};