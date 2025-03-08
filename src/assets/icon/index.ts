export const ROTATE_SVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg t="1699434105329" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6530" width="32" height="32" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M508.018 995.557c-269.887 0-488.675-218.785-488.675-488.675S238.13 18.206 508.018 18.206s488.676 218.787 488.676 488.676c0 269.89-218.788 488.675-488.676 488.675z m0-885.723c-219.283 0-397.048 177.763-397.048 397.048 0 219.284 177.765 397.05 397.048 397.05 219.285 0 397.049-177.766 397.049-397.05 0-219.285-177.764-397.048-397.049-397.048z m206.72 336.247h-87.822c-11.193 0-20.267-9.074-20.267-20.267s9.074-20.267 20.267-20.267h34.905c-31.736-44.89-83.812-74.31-142.994-74.31-97.007 0-175.645 78.638-175.645 175.643 0 11.194-9.074 20.267-20.267 20.267-11.192 0-20.266-9.073-20.266-20.267 0-119.391 96.786-216.177 216.178-216.177 72.505 0 136.49 35.795 175.644 90.603v-36.56c0-11.192 9.073-20.265 20.267-20.265s20.266 9.073 20.266 20.266v81.066c0 11.194-9.073 20.268-20.266 20.268z m-391.822 121.6h87.822c11.193 0 20.266 9.073 20.266 20.266 0 11.193-9.073 20.267-20.266 20.267h-35.18c31.76 44.942 84.035 74.31 143.269 74.31 97.005 0 175.644-78.638 175.644-175.644 0-11.193 9.073-20.266 20.267-20.266s20.266 9.073 20.266 20.266c0 119.392-96.786 216.179-216.177 216.179-72.597 0-136.54-35.95-175.645-90.892v36.847c0 11.193-9.074 20.267-20.267 20.267-11.192 0-20.267-9.074-20.267-20.267v-81.067c0-11.193 9.075-20.266 20.268-20.266z" fill="#515151" p-id="6531"></path></svg>')}`;

export const ROTATE_SVG_ACTIVE = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg t="1699434105329" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6530" width="32" height="32" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M508.018 995.557c-269.887 0-488.675-218.785-488.675-488.675S238.13 18.206 508.018 18.206s488.676 218.787 488.676 488.676c0 269.89-218.788 488.675-488.676 488.675z m0-885.723c-219.283 0-397.048 177.763-397.048 397.048 0 219.284 177.765 397.05 397.048 397.05 219.285 0 397.049-177.766 397.049-397.05 0-219.285-177.764-397.048-397.049-397.048z m206.72 336.247h-87.822c-11.193 0-20.267-9.074-20.267-20.267s9.074-20.267 20.267-20.267h34.905c-31.736-44.89-83.812-74.31-142.994-74.31-97.007 0-175.645 78.638-175.645 175.643 0 11.194-9.074 20.267-20.267 20.267-11.192 0-20.266-9.073-20.266-20.267 0-119.391 96.786-216.177 216.178-216.177 72.505 0 136.49 35.795 175.644 90.603v-36.56c0-11.192 9.073-20.265 20.267-20.265s20.266 9.073 20.266 20.266v81.066c0 11.194-9.073 20.268-20.266 20.268z m-391.822 121.6h87.822c11.193 0 20.266 9.073 20.266 20.266 0 11.193-9.073 20.267-20.266 20.267h-35.18c31.76 44.942 84.035 74.31 143.269 74.31 97.005 0 175.644-78.638 175.644-175.644 0-11.193 9.073-20.266 20.267-20.266s20.266 9.073 20.266 20.266c0 119.392-96.786 216.179-216.177 216.179-72.597 0-136.54-35.95-175.645-90.892v36.847c0 11.193-9.074 20.267-20.267 20.267-11.192 0-20.267-9.074-20.267-20.267v-81.067c0-11.193 9.075-20.266 20.268-20.266z" fill="#F50909" p-id="6531"></path></svg>')}`;

export const ROTATE_CURSOR = encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='24' height='24'>
  <defs>
    <filter id='a' width='266.7%' height='156.2%' x='-75%' y='-21.9%' filterUnits='objectBoundingBox'>
      <feOffset dy='1' in='SourceAlpha' result='shadowOffsetOuter1'/>
      <feGaussianBlur in='shadowOffsetOuter1' result='shadowBlurOuter1' stdDeviation='1'/>
      <feColorMatrix in='shadowBlurOuter1' result='shadowMatrixOuter1' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0'/>
      <feMerge>
        <feMergeNode in='shadowMatrixOuter1'/>
        <feMergeNode in='SourceGraphic'/>
      </feMerge>
    </filter>
    <path id='b' d='M1.67 12.67a7.7 7.7 0 0 0 0-9.34L0 5V0h5L3.24 1.76a9.9 9.9 0 0 1 0 12.48L5 16H0v-5l1.67 1.67z'/>
  </defs>
  <g fill='none' fill-rule='evenodd'><path d='M0 24V0h24v24z'/>
    <g fill-rule='nonzero' filter='url(#a)' transform='rotate(90 5.25 14.75)'>
      <use fill='#000' fill-rule='evenodd' xlink:href='#b'/>
      <path stroke='#FFF' d='M1.6 11.9a7.21 7.21 0 0 0 0-7.8L-.5 6.2V-.5h6.7L3.9 1.8a10.4 10.4 0 0 1 0 12.4l2.3 2.3H-.5V9.8l2.1 2.1z'/>
    </g>
  </g>
</svg>`);

export const COPY_SVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg t="1702138272519" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16833" width="32" height="32"><path d="M810.666667 85.333333a85.333333 85.333333 0 0 1 85.333333 85.333334v512a85.333333 85.333333 0 0 1-85.333333 85.333333h-85.333334v85.333333a85.333333 85.333333 0 0 1-85.333333 85.333334H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h85.333334V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334h426.666667z m-384 554.666667H341.333333a42.666667 42.666667 0 0 0-4.992 85.034667L341.333333 725.333333h85.333334a42.666667 42.666667 0 0 0 4.992-85.034666L426.666667 640z m384-469.333333H384v85.333333h256a85.333333 85.333333 0 0 1 85.333333 85.333333v341.333334h85.333334V170.666667z m-298.666667 298.666666H341.333333a42.666667 42.666667 0 1 0 0 85.333334h170.666667a42.666667 42.666667 0 1 0 0-85.333334z" p-id="16834" fill="#515151"></path></svg>')}`;

export const COPY_SVG_ACTIVE = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg t="1702138272519" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16833" width="32" height="32"><path d="M810.666667 85.333333a85.333333 85.333333 0 0 1 85.333333 85.333334v512a85.333333 85.333333 0 0 1-85.333333 85.333333h-85.333334v85.333333a85.333333 85.333333 0 0 1-85.333333 85.333334H213.333333a85.333333 85.333333 0 0 1-85.333333-85.333334V341.333333a85.333333 85.333333 0 0 1 85.333333-85.333333h85.333334V170.666667a85.333333 85.333333 0 0 1 85.333333-85.333334h426.666667z m-384 554.666667H341.333333a42.666667 42.666667 0 0 0-4.992 85.034667L341.333333 725.333333h85.333334a42.666667 42.666667 0 0 0 4.992-85.034666L426.666667 640z m384-469.333333H384v85.333333h256a85.333333 85.333333 0 0 1 85.333333 85.333333v341.333334h85.333334V170.666667z m-298.666667 298.666666H341.333333a42.666667 42.666667 0 1 0 0 85.333334h170.666667a42.666667 42.666667 0 1 0 0-85.333334z" p-id="16834" fill="#d81e06"></path></svg>')}`;

export const DEL_SVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg t="1702138440243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19137" width="32" height="32"><path d="M853.333333 192v42.666667a21.333333 21.333333 0 0 1-21.333333 21.333333h-640a21.333333 21.333333 0 0 1-21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 1 21.333333-21.333333H384V128a42.666667 42.666667 0 0 1 42.666667-42.666667h170.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667h192a21.333333 21.333333 0 0 1 21.333333 21.333333zM250.453333 859.306667a85.333333 85.333333 0 0 0 85.333334 79.36h353.28a85.333333 85.333333 0 0 0 85.333333-79.36L810.666667 341.333333H213.333333z" p-id="19138" fill="#515151"></path></svg>')}`;

export const DEL_SVG_ACTIVE = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg t="1702138440243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19137" width="32" height="32"><path d="M853.333333 192v42.666667a21.333333 21.333333 0 0 1-21.333333 21.333333h-640a21.333333 21.333333 0 0 1-21.333333-21.333333v-42.666667a21.333333 21.333333 0 0 1 21.333333-21.333333H384V128a42.666667 42.666667 0 0 1 42.666667-42.666667h170.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667h192a21.333333 21.333333 0 0 1 21.333333 21.333333zM250.453333 859.306667a85.333333 85.333333 0 0 0 85.333334 79.36h353.28a85.333333 85.333333 0 0 0 85.333333-79.36L810.666667 341.333333H213.333333z" p-id="19138" fill="#d81e06"></path></svg>')}`;

export const DRAW_MODE_CURSOR = '<svg t="1701336130548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="46063" width="16" height="16"><path d="M666.112 549.568l116.032-116.8-241.856-244.16-115.2 116.928-104.64 105.152-94.912 94.784A5667.84 5667.84 0 0 0 154.88 577.536c-19.456 19.456-30.784 31.744-36.48 36.992-10.304 10.048-19.584 21.12-27.52 32.96a198.272 198.272 0 0 0-17.088 33.088 208.64 208.64 0 0 0-17.088 42.88c-7.296 20.8-13.824 43.52-21.12 68.16-7.296 24.704-14.592 48.64-21.12 71.424a411.968 411.968 0 0 0-12.16 52.48 61.184 61.184 0 0 0 6.528 48.064 50.56 50.56 0 0 0 46.272 10.368c11.264-1.792 28.352-5.696 51.136-11.648a1664.32 1664.32 0 0 0 145.28-46.784c18.112-6.272 35.584-13.632 52.8-22.016 12.544-5.248 24.32-12.288 34.944-20.8 11.328-8.704 21.12-16.896 30.08-24.32a520.96 520.96 0 0 0 32.384-31.168l68.16-69.44c27.52-28.16 58.432-59.136 93.248-92.8l103.04-105.408z m232.064-232.384c5.632-6.08 12.928-12.992 21.12-20.8 8.128-7.808 17.856-16.896 27.52-27.328 8.96-9.472 16-20.48 21.12-32.448 4.16-10.752 6.336-22.208 6.528-33.728a202.24 202.24 0 0 0-3.2-32.448 119.872 119.872 0 0 0-8.96-27.328 272.512 272.512 0 0 0-50.304-74.56 255.04 255.04 0 0 0-60.096-49.92 205.952 205.952 0 0 0-30.784-11.648 141.568 141.568 0 0 0-35.712-5.888 112.768 112.768 0 0 0-38.08 5.248 115.52 115.52 0 0 0-38.08 20.096c-8.96 8.192-21.12 18.432-34.944 31.808-13.824 13.376-26.816 24.832-37.376 34.304l241.92 242.816c5.632-5.12 12.032-11.2 19.328-18.176z" fill="#2c2c2c" p-id="46064"></path></svg>';

export const DRAG_ICON = '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4941" width="22" height="22"><path d="M630.57970569 637.6867208l110.35938764 236.66748681c6.20083831 13.29490805 0.44014302 29.08827497-12.84181964 35.28911328l-96.26186588 44.88164187c-13.29490805 6.20083831-29.08827497 0.45308839-35.28911329-12.84181965l-112.87079191-242.05276602-138.77450271 138.77450272c-10.36925155 10.36925155-27.17235831 10.36925155-37.54160987 0.01294537a26.56392533 26.56392533 0 0 1-7.78017501-18.78375032V147.18616969c0-14.66711861 11.88386133-26.55097995 26.55097995-26.55097996 6.60214518 0 12.97127348 2.45962272 17.86462814 6.89988899l494.18998519 449.26950715c10.84823072 9.86438163 11.65084445 26.65454302 1.78646281 37.50277374a26.56004172 26.56004172 0 0 1-17.6057205 8.6086795L630.57970569 637.6867208z" p-id="4942" fill="#2c2c2c"></path></svg>';

export const CLEAR_ICON = '<svg viewBox="64 64 896 896" focusable="false" data-icon="clear" width="1em" height="1em" fill="currentColor" aria-hidden="true"><defs><style></style></defs><path d="M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z"></path></svg>';

export const LOGO_ICON = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 44L12 40L16 44L20 38L24 44L28 38L32 44L36 40L40 44V20C40 11.1634 32.8366 4 24 4C15.1634 4 8 11.1634 8 20V44Z" fill="none" stroke="#000000" stroke-width="4" stroke-linejoin="round"/><path d="M19 20H21" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M31 20H33" stroke="#000000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>')}`;

export const EDIT_SVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#515151" stroke="#515151"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>edit_2_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Editor" transform="translate(-96.000000, -240.000000)" fill-rule="nonzero"> <g id="edit_2_fill" transform="translate(96.000000, 240.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M10.7559,6.16997 L17.8269,13.241 L10.6532,20.4148 C10.3197778,20.7482222 9.88080296,20.9517481 9.41483139,20.9928598 L9.23898,21.0006 L4.00634,21.0006 C3.48575467,21.0006 3.0571064,20.6066836 3.00226701,20.1006493 L2.99634,19.9906 L2.99634,14.7579 C2.99634,14.2864333 3.16282691,13.8321123 3.46324765,13.473528 L3.58212,13.3437 L10.7559,6.16997 Z M13.8958,3.03 C14.6357895,2.29005789 15.8112493,2.25111357 16.5970778,2.91316704 L16.7243,3.03 L20.9669,7.27264 C21.7067947,8.01258211 21.7457366,9.18806637 21.0837255,9.97388053 L20.9669,10.1011 L19.2411,11.8268 L12.1701,4.75576 L13.8958,3.03 Z" id="形状" fill="#515151"> </path> </g> </g> </g> </g></svg>')}`;

export const EDIT_SVG_ACTIVE = `data:image/svg+xml;charset=utf-8,${encodeURIComponent('<svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#515151" stroke="#515151"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>edit_2_fill</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Editor" transform="translate(-96.000000, -240.000000)" fill-rule="nonzero"> <g id="edit_2_fill" transform="translate(96.000000, 240.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M10.7559,6.16997 L17.8269,13.241 L10.6532,20.4148 C10.3197778,20.7482222 9.88080296,20.9517481 9.41483139,20.9928598 L9.23898,21.0006 L4.00634,21.0006 C3.48575467,21.0006 3.0571064,20.6066836 3.00226701,20.1006493 L2.99634,19.9906 L2.99634,14.7579 C2.99634,14.2864333 3.16282691,13.8321123 3.46324765,13.473528 L3.58212,13.3437 L10.7559,6.16997 Z M13.8958,3.03 C14.6357895,2.29005789 15.8112493,2.25111357 16.5970778,2.91316704 L16.7243,3.03 L20.9669,7.27264 C21.7067947,8.01258211 21.7457366,9.18806637 21.0837255,9.97388053 L20.9669,10.1011 L19.2411,11.8268 L12.1701,4.75576 L13.8958,3.03 Z" id="形状" fill="#d81e06"> </path> </g> </g> </g> </g></svg>')}`;