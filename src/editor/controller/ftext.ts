import { fabric } from 'fabric';
import { changeHeight } from '@/utils/helper';
import { editObject } from '@/utils/helper';
import {EDIT_SVG, EDIT_SVG_ACTIVE } from '@/assets/icon';


const EDIT_IMG = document.createElement('img');
EDIT_IMG.src = EDIT_SVG;
const EDIT_IMG_ACTIVE = document.createElement('img');
EDIT_IMG_ACTIVE.src = EDIT_SVG_ACTIVE;

const handleEditObject = (eventData, transform) => {
  const { target } = transform;
  const { canvas } = target;
  editObject(target, canvas);
  return true;
};

function renderSvgIcon(icon) {
  return function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    const size = 28;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(icon, -size / 2, -size / 2, size, size);
    ctx.restore();
  };
}

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
    
    const editControl = new fabric.Control({
      x: 0,
      y: -0.5,
      offsetX: 12,
      offsetY: -26,
      cursorStyle: 'pointer',
      mouseUpHandler: handleEditObject,
      render: renderSvgIcon(EDIT_IMG),
    });
    ftextControl.edit = editControl;

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