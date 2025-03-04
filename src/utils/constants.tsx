export const APP_NAME = "fabritor";
export const APP_VERSION = "3.0.0";
export const SCHEMA_VERSION = 3.1;
export const SCHEMA_VERSION_KEY = "fabritor_schema_version";
export const LOG_PREFIX = `${APP_NAME}_log：`;

export const OBJECT_DEFAULT_CONFIG = {
  // controls
  borderColor: "#FF2222",
  borderScaleFactor: 2,
  cornerStrokeColor: "#2222",
  cornerColor: "#FF2222",
  cornerSize: 12,
  cornerStyle: "circle",
  transparentCorners: false,
  padding: 0,
  centeredScaling: false,
  strokeUniform: true,
  paintFirst: "stroke",
};

export const TEXTBOX_DEFAULT_CONFIG = {
  // styles
  fill: "#000000",
  fontWeight: "normal",
  fontSize: 50,
  lineHeight: 1.3,
  textAlign: "center",
  fontFamily: "AlibabaPuHuiTi",
  // size
  width: 500,
  // 中文处理
  splitByGrapheme: true,
};

export const FONT_PRESET_FAMILY_LIST = [
  {
    label: (
      <span style={{ fontFamily: "AbrilFatface", fontSize: 16 }}>
        AbrilFatface
      </span>
    ),
    value: "AbrilFatface",
  },
  {
    label: (
      <span style={{ fontFamily: "AlfaSlabOne", fontSize: 16 }}>
        AlfaSlabOne
      </span>
    ),
    value: "AlfaSlabOne",
  },
  {
    label: (
      <span style={{ fontFamily: "AnonymousPro", fontSize: 16 }}>
        AnonymousPro
      </span>
    ),
    value: "AnonymousPro",
  },
  {
    label: (
      <span style={{ fontFamily: "AnticDidone", fontSize: 16 }}>
        AnticDidone
      </span>
    ),
    value: "AnticDidone",
  },
  {
    label: (
      <span style={{ fontFamily: "AzeretMono", fontSize: 16 }}>AzeretMono</span>
    ),
    value: "AzeretMono",
  },
  {
    label: (
      <span style={{ fontFamily: "BebasNeue", fontSize: 16 }}>BebasNeue</span>
    ),
    value: "BebasNeue",
  },
  {
    label: (
      <span style={{ fontFamily: "BerkshireSwash", fontSize: 16 }}>
        BerkshireSwash
      </span>
    ),
    value: "BerkshireSwash",
  },
  {
    label: <span style={{ fontFamily: "Caveat", fontSize: 16 }}>Caveat</span>,
    value: "Caveat",
  },
  {
    label: (
      <span style={{ fontFamily: "CedarvilleCursive", fontSize: 16 }}>
        CedarvilleCursive
      </span>
    ),
    value: "CedarvilleCursive",
  },
  {
    label: <span style={{ fontFamily: "Cinzel", fontSize: 16 }}>Cinzel</span>,
    value: "Cinzel",
  },
  {
    label: (
      <span style={{ fontFamily: "Comfortaa", fontSize: 16 }}>Comfortaa</span>
    ),
    value: "Comfortaa",
  },
  {
    label: (
      <span style={{ fontFamily: "Cormorant", fontSize: 16 }}>Cormorant</span>
    ),
    value: "Cormorant",
  },
  {
    label: (
      <span style={{ fontFamily: "CourierPrime", fontSize: 16 }}>
        CourierPrime
      </span>
    ),
    value: "CourierPrime",
  },
  {
    label: (
      <span style={{ fontFamily: "DancingScript", fontSize: 16 }}>
        DancingScript
      </span>
    ),
    value: "DancingScript",
  },
  {
    label: (
      <span style={{ fontFamily: "FiraSans", fontSize: 16 }}>FiraSans</span>
    ),
    value: "FiraSans",
  },
  {
    label: <span style={{ fontFamily: "Gotu", fontSize: 16 }}>Gotu</span>,
    value: "Gotu",
  },
  {
    label: (
      <span style={{ fontFamily: "HomemadeApple", fontSize: 16 }}>
        HomemadeApple
      </span>
    ),
    value: "HomemadeApple",
  },
  {
    label: (
      <span style={{ fontFamily: "IBMPlexMono", fontSize: 16 }}>
        IBMPlexMono
      </span>
    ),
    value: "IBMPlexMono",
  },
  {
    label: (
      <span style={{ fontFamily: "Inconsolata", fontSize: 16 }}>
        Inconsolata
      </span>
    ),
    value: "Inconsolata",
  },
  {
    label: (
      <span style={{ fontFamily: "IndieFlower", fontSize: 16 }}>
        IndieFlower
      </span>
    ),
    value: "IndieFlower",
  },
  {
    label: (
      <span style={{ fontFamily: "Italiana", fontSize: 16 }}>Italiana</span>
    ),
    value: "Italiana",
  },
  {
    label: (
      <span style={{ fontFamily: "JetBrainsMono", fontSize: 16 }}>
        JetBrainsMono
      </span>
    ),
    value: "JetBrainsMono",
  },
  {
    label: (
      <span style={{ fontFamily: "LaBelleAurore", fontSize: 16 }}>
        LaBelleAurore
      </span>
    ),
    value: "LaBelleAurore",
  },
  {
    label: <span style={{ fontFamily: "Lato", fontSize: 16 }}>Lato</span>,
    value: "Lato",
  },
  {
    label: (
      <span style={{ fontFamily: "LeagueScript", fontSize: 16 }}>
        LeagueScript
      </span>
    ),
    value: "LeagueScript",
  },
  {
    label: (
      <span style={{ fontFamily: "LibreBaskerville", fontSize: 16 }}>
        LibreBaskerville
      </span>
    ),
    value: "LibreBaskerville",
  },
  {
    label: <span style={{ fontFamily: "Lobster", fontSize: 16 }}>Lobster</span>,
    value: "Lobster",
  },
  {
    label: (
      <span style={{ fontFamily: "Merriweather", fontSize: 16 }}>
        Merriweather
      </span>
    ),
    value: "Merriweather",
  },
  {
    label: (
      <span style={{ fontFamily: "Montserrat", fontSize: 16 }}>Montserrat</span>
    ),
    value: "Montserrat",
  },
  {
    label: (
      <span style={{ fontFamily: "NotoSansMono", fontSize: 16 }}>
        NotoSansMono
      </span>
    ),
    value: "NotoSansMono",
  },
  {
    label: (
      <span style={{ fontFamily: "NotoSerif", fontSize: 16 }}>NotoSerif</span>
    ),
    value: "NotoSerif",
  },
  {
    label: <span style={{ fontFamily: "Oswald", fontSize: 16 }}>Oswald</span>,
    value: "Oswald",
  },
  {
    label: (
      <span style={{ fontFamily: "Pacifico", fontSize: 16 }}>Pacifico</span>
    ),
    value: "Pacifico",
  },
  {
    label: (
      <span style={{ fontFamily: "PlayfairDisplay", fontSize: 16 }}>
        PlayfairDisplay
      </span>
    ),
    value: "PlayfairDisplay",
  },
  {
    label: <span style={{ fontFamily: "Poppins", fontSize: 16 }}>Poppins</span>,
    value: "Poppins",
  },
  {
    label: (
      <span style={{ fontFamily: "ProzaLibre", fontSize: 16 }}>ProzaLibre</span>
    ),
    value: "ProzaLibre",
  },
  {
    label: <span style={{ fontFamily: "PTSans", fontSize: 16 }}>PTSans</span>,
    value: "PTSans",
  },
  {
    label: <span style={{ fontFamily: "Raleway", fontSize: 16 }}>Raleway</span>,
    value: "Raleway",
  },
  {
    label: <span style={{ fontFamily: "Roboto", fontSize: 16 }}>Roboto</span>,
    value: "Roboto",
  },
  {
    label: (
      <span style={{ fontFamily: "RobotoCondensed", fontSize: 16 }}>
        RobotoCondensed
      </span>
    ),
    value: "RobotoCondensed",
  },
  {
    label: (
      <span style={{ fontFamily: "RobotoMono", fontSize: 16 }}>RobotoMono</span>
    ),
    value: "RobotoMono",
  },
  {
    label: (
      <span style={{ fontFamily: "RobotoSlab", fontSize: 16 }}>RobotoSlab</span>
    ),
    value: "RobotoSlab",
  },
  {
    label: (
      <span style={{ fontFamily: "ShadowsIntoLight", fontSize: 16 }}>
        ShadowsIntoLight
      </span>
    ),
    value: "ShadowsIntoLight",
  },
  {
    label: (
      <span style={{ fontFamily: "SourceCodePro", fontSize: 16 }}>
        SourceCodePro
      </span>
    ),
    value: "SourceCodePro",
  },
  {
    label: (
      <span style={{ fontFamily: "SourceSans3", fontSize: 16 }}>
        SourceSans3
      </span>
    ),
    value: "SourceSans3",
  },
  {
    label: (
      <span style={{ fontFamily: "SpaceMono", fontSize: 16 }}>SpaceMono</span>
    ),
    value: "SpaceMono",
  },
];

export const SKETCH_ID = "fabritor-sketch";

export const FABRITOR_CUSTOM_PROPS = [
  "id",
  "fabritor_desc",
  "selectable",
  "hasControls",
  "sub_type",
  "imageSource",
  "imageBorder",
  "oldArrowInfo",
];
