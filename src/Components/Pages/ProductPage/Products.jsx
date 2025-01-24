import boxtypespace from "../../../assets/Images/ptoductsImg/boxtypeheatersimg/boxtypespace.jpeg";
import endfixingtype from "../../../assets/Images/ptoductsImg/endfixingtype.jpeg";
import spaceheaters from "../../../assets/Images/ptoductsImg/space_Heaters_Img/spaceheaters.jpeg";
import table1 from "../../../assets/Images/ptoductsImg/space_Heaters_Img/alsoAvalableTable.png";
import table2 from "../../../assets/Images/ptoductsImg/space_Heaters_Img/Tech_table.png";
import diagram from "../../../assets/Images/ptoductsImg/space_Heaters_Img/digram.png";
import alsoavalabel from "../../../assets/Images/ptoductsImg/space_Heaters_Img/asloavalibaelProducrs.png";
import boxheaterimg1 from "../../../assets/Images/ptoductsImg/boxtypeheatersimg/imgs (1).png";
import boxheaterimg2 from "../../../assets/Images/ptoductsImg/boxtypeheatersimg/imgs (2).png";
import boxheaterimg3 from "../../../assets/Images/ptoductsImg/boxtypeheatersimg/imgs (3).png";
import boxheaterimg4 from "../../../assets/Images/ptoductsImg/boxtypeheatersimg/imgs (4).png";
import aluimg1 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (1).png";
import aluimg2 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (2).png";
import aluimg3 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (3).png";
import aluimg4 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (4).png";
import aluimg5 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (5).png";
import aluimg6 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (6).png";
import aluimg7 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (7).png";
import aluimg8 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (8).png";
import aluimg9 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (9).png";
import aluimg10 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (10).png";
import aluimg11 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (11).png";
import aluimg12 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (12).png";
import aluimg13 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (13).png";
import aluimg14 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (14).png";
import aluimg15 from "../../../assets/Images/ptoductsImg/aluminumheratersimg/alunimu-heaters-Img (15).png";


// const spaceheaterImges = {
//   table1: require("./assets/Images/ptoductsImg/space_Heaters_Img/alsoAvalableTable.png"),
//   table2: require("./assets/Images/ptoductsImg/space_Heaters_Img/Tech_table.png"),
//   diagram: require("./assets/Images/ptoductsImg/space_Heaters_Img/digram.png"),
//   alsoavalabel: require("./assets/Images/ptoductsImg/space_Heaters_Img/asloavalibaelProducrs.png"),
// };

const Products = [
  {
    // this are the headinds for the drop down and prams and the main page heading
    id: "heating",
    name: "heating",
    subProducts: [
      {
        id: "SpaceHeaters",
        title: "SPACE HEATERS (Perforated Body)",
        productImg: spaceheaters,
        application: "For Panel Boards & Switchgear Industries",
        models: ["SH", "SHISS", "SHIL"],
        features: [
          "Perforated cover for protection",
          "Quick and uniform heating",
          "Withstands mechanical shock and vibration",
          "Very good insulation resistance",
        ],
        description:
          "'GIRISHEGO' Range of Space Heaters are ideal for prevention of condensation, corrosion & Leakage currents in LT. & H.T. Switchgear panel boards/ electronic instruments & panels etc.",
        workingH: "Working Principle & Features",
        workingDetails: [
          "Specially developed design with a stainless steel sheathed cartridge heating element in a perforated sheet metal enclosure.",
          "Black powder coated finish for rapid heat dissipation.",
          "2 x 2.5 mm porcelain terminal block for electrical connection.",
          "Mounting holes provided on one side.",
        ],
        tests: [
          "High Voltage Test at 2kV/1Min",
          "Insulation Resistance > 10 Mega Ohms",
          "Power Rating within ±5%",
        ],
        intended: "Intended Use",
        uses: [
          "Prevention of condensation",
          "corrosion",
          "of leakage currents in LT & HT Switchgear panel boards or electronic instruments & panels.",
        ],
        Installation: "Installation",
        instructions: [
          "Two holes (217mm) provided for mounting on one side of the heater.",
          "Can be installed vertically or horizontally, though horizontal is preferred.",
          "Distance from panel surface: At least 10mm.",
          "Distance from plastic parts: At least 50mm.",
          "Connection wire must be on the side or below to avoid warming up.",
        ],
        remark: "Remark",
        recommendation: "Use a 'GIRISHEGO' thermostat to control the heater.",
        otherImages: [table1, alsoavalabel, diagram, table2],
      },
      {
        id: "End-Fixing",
        title: "End Fixing Type (SAL)",
        productImg: endfixingtype,
        application: "For Panel Boards & Switchgear Industries",
        models: ["SH", "SHISS", "SHIL"],
        features: [
          "Aluminum body for fast dissipation of heat into air",
          "Perforated cover for protection",
          "Quick and uniform heating",
          "Withstands mechanical shock and vibration",
          "Very good insulation resistance",
        ],
        description:
          "'GIRISHEGO' Aluminium Space Heaters are ideal for prevention of condensation, corrosion, Leakage currents in LT. & H.T. Switchgears, Panel boards/ electronic instruments & panels etc",
        workingH: "Working Principle & Features",
        workingDetails: [
          "Body is made of anodized heat sink grade extruded aluminium for fast dissipation of heat into air. High quality resistance heating element is insulated with mica for optimum insulation even in extreme humid conditions.",
          "Resistance element and insulation are held tight in between aluminium parts and squeezed for quick and uniform heating. Heater can withstand much higher degree of mechanical shock and vibration. ",
          "Elevated body provides for easy passage of heat directly to air, without heating panel body. An optional Perforated cover made of Powder coated M.S. sheet can be provided for extra safety",
        ],
        tests: [
          // "High Voltage Test at 2kV/1Min",
          // "Insulation Resistance > 10 Mega Ohms",
          // "Power Rating within ±5%",
        ],
        intended: "Intended Use",
        uses: [
          "Prevention of condensation",
          "corrosion",
          "of Leakage currents in LT. & H.T. Switchgear panel boards, enclosures, switch boards, & electronic instruments etc",
        ],
        Installation: "Installation",
        instructions: [
          "In END FIXING type model one fixing oval holes of 6.5mmX22.5mm and two 6.5mm Holes are provided at each end.",
          "In SIDE & MIDDLE FIXING type models one fixing oval hole of 6.5mmX22.5mm and Two 6.5mm Holes are provided in a bracket at Side Middle of the heater.",
          "Installation can be done in vertical or horizontal position although horizontal mounting is preferred. Distance from surface of panel should be at least 10mm. and distance from plastic parts should be at least 50mm. ",
          "Connection wire must be on the side or below to avoid warming up of the wire.",
        ],
        remark: "Remark",
        recommendation:
          "It is recommended to use a 'GIRISHEGO' thermostat to control the heater.",
        otherImages: [
          aluimg1,
          aluimg2,
          aluimg3,
          aluimg4,
          aluimg5,
          aluimg6,
          aluimg7,
          aluimg8,
          aluimg9,
          aluimg10,
          aluimg11,
          aluimg12,
          aluimg13,
          aluimg14,
          aluimg15,
        ],
      },
      {
        id: "BOX-SPACE-HEATERS",
        title: "BOX TYPE SPACE HEATERS",
        productImg: boxtypespace,
        application: "For Panel Boards & Switchgear Industries",
        models: ["BOX"],
        features: [
          "Bigger surface area for heat dissipation in Aluminum enclosure",
          "Quick and uniform heating",
          "Withstands mechanical shock and vibration",
          "Very good insulation resistance",
        ],
        description:
          "'GIRISHEGO' Range of Space Heaters are ideal for prevention of condensation, corrosion. Leakage currents in LT. & H.T. Switchgear panel boards/ electronic instruments & panels etc.",
        workingH: "Working Principle & Features",
        workingDetails: [
          "Specially developed design with a stainless steel sheathed cartridge heating element in a perforated sheet metal enclosure.",
          "Black powder coated finish for rapid heat dissipation.",
          "2 x 2.5 mm porcelain terminal block for electrical connection.",
          "Mounting holes provided on one side.",
        ],
        tests: [
          "High Voltage Test at 2kV/1Min",
          "Insulation Resistance > 10 Mega Ohms",
          "Power Rating within ±5%",
        ],
        intended: "Intended Use",
        uses: [
          "Prevention of condensation",
          "corrosion",
          "of leakage currents in LT & HT Switchgear panel boards or electronic instruments & panels.",
        ],
        Installation: "Installation",
        instructions: [
          "Two holes (217mm) provided for mounting on one side of the heater.",
          "Can be installed vertically or horizontally, though horizontal is preferred.",
          "Distance from panel surface: At least 10mm.",
          "Distance from plastic parts: At least 50mm.",
          "Connection wire must be on the side or below to avoid warming up.",
        ],
        remark: "Remark",
        recommendation: "Use a 'GIRISHEGO' thermostat to control the heater.",
        otherImages: [
          boxheaterimg1,
          boxheaterimg2,
          boxheaterimg3,
          boxheaterimg4,
        ],
      },
    ],
  },
  {
    id: "controls",
    name: "controls",
    subProducts: [
      {
        id: "sub1",
        title: "Sub Product 2.1",
        productInfo:
          "lorigiuhduoahlfharuhgajbfvabsiuv aiushdfiu ahfiusdfbia isdfbisudhfau sdhfi u isd sd fa iuai  ",
        productApplication:
          "fuagfbkjagfbakjddfhau fgu uh uwh d9wo yhaegrhgifg 8a sjg98gyoekgjgerygh eygh8989ahgp9q7yrgnu e8hgndhfhv dyvv g ig info8yehg q vouhfkm  9z.n nk9ah nio a;oih/zha/eirug",
      },
      {
        id: "sub2",
        title: "Sub Product 2.2",
        productInfo:
          "lorigiuhduoahlfharuhgajbfvabsiuv aiushdfiu ahfiusdfbia isdfbisudhfau sdhfi u isd sd fa iuai  ",
        productApplication:
          "fuagfbkjagfbakjddfhau fgu uh uwh d9wo yhaegrhgifg 8a sjg98gyoekgjgerygh eygh8989ahgp9q7yrgnu e8hgndhfhv dyvv g ig info8yehg q vouhfkm  9z.n nk9ah nio a;oih/zha/eirug",
      },
      {
        id: "sub3",
        title: "Sub Product 2.3",
        productInfo:
          "lorigiuhduoahlfharuhgajbfvabsiuv aiushdfiu ahfiusdfbia isdfbisudhfau sdhfi u isd sd fa iuai  ",
        productApplication:
          "fuagfbkjagfbakjddfhau fgu uh uwh d9wo yhaegrhgifg 8a sjg98gyoekgjgerygh eygh8989ahgp9q7yrgnu e8hgndhfhv dyvv g ig info8yehg q vouhfkm  9z.n nk9ah nio a;oih/zha/eirug",
      },
    ],
  },
  {
    id: "Accessories",
    name: "Accessories",
    subProducts: [
      {
        id: "sub1",
        title: "Sub Product 3.1",
        productInfo:
          "lorigiuhduoahlfharuhgajbfvabsiuv aiushdfiu ahfiusdfbia isdfbisudhfau sdhfi u isd sd fa iuai  ",
        productApplication:
          "fuagfbkjagfbakjddfhau fgu uh uwh d9wo yhaegrhgifg 8a sjg98gyoekgjgerygh eygh8989ahgp9q7yrgnu e8hgndhfhv dyvv g ig info8yehg q vouhfkm  9z.n nk9ah nio a;oih/zha/eirug",
      },
      {
        id: "sub2",
        title: "Sub Product 3.2",
        productInfo:
          "lorigiuhduoahlfharuhgajbfvabsiuv aiushdfiu ahfiusdfbia isdfbisudhfau sdhfi u isd sd fa iuai  ",
        productApplication:
          "fuagfbkjagfbakjddfhau fgu uh uwh d9wo yhaegrhgifg 8a sjg98gyoekgjgerygh eygh8989ahgp9q7yrgnu e8hgndhfhv dyvv g ig info8yehg q vouhfkm  9z.n nk9ah nio a;oih/zha/eirug",
      },
      {
        id: "sub3",
        title: "Sub Product 3.3",
        productInfo:
          "lorigiuhduoahlfharuhgajbfvabsiuv aiushdfiu ahfiusdfbia isdfbisudhfau sdhfi u isd sd fa iuai  ",
        productApplication:
          "fuagfbkjagfbakjddfhau fgu uh uwh d9wo yhaegrhgifg 8a sjg98gyoekgjgerygh eygh8989ahgp9q7yrgnue8hgndhfhv dyvv g ig info8yehg q vouhfkm  9z.n nk9ah nio a;oih/zha/eirug",
      },
    ],
  },
];

export default Products;
