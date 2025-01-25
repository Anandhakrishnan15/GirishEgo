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
// import PTC enclos heaters
import PTC1 from "../../../assets/Images/ptoductsImg/ptc-heatersimgs/pta (1).png";
import PTC2 from "../../../assets/Images/ptoductsImg/ptc-heatersimgs/pta (2).png";
import PTC3 from "../../../assets/Images/ptoductsImg/ptc-heatersimgs/pta (3).png";
import PTC4 from "../../../assets/Images/ptoductsImg/ptc-heatersimgs/pta (4).png";
import PTC5 from "../../../assets/Images/ptoductsImg/ptc-heatersimgs/pta (5).png";
import PTC6 from "../../../assets/Images/ptoductsImg/ptc-heatersimgs/pta (6).png";
// import combi heatrs images
import combi1 from "../../../assets/Images/ptoductsImg/combi-heaters-Imgs/combi (1).png";
import combi2 from "../../../assets/Images/ptoductsImg/combi-heaters-Imgs/combi (2).png";
import combi4 from "../../../assets/Images/ptoductsImg/combi-heaters-Imgs/combi (4).png";
import combi3 from "../../../assets/Images/ptoductsImg/combi-heaters-Imgs/combi (3).png";
import combi5 from "../../../assets/Images/ptoductsImg/combi-heaters-Imgs/combi (5).png";
// importing the havey duty heaters images

import HDH1 from "../../../assets/Images/ptoductsImg/havydudy-heaters_img/HDG (1).png";
import HDH2 from "../../../assets/Images/ptoductsImg/havydudy-heaters_img/HDG (2).png";
import HDH3 from "../../../assets/Images/ptoductsImg/havydudy-heaters_img/HDG (3).png";
import HDH4 from "../../../assets/Images/ptoductsImg/havydudy-heaters_img/HDG (4).png";
import HDH5 from "../../../assets/Images/ptoductsImg/havydudy-heaters_img/HDG (5).png";

//import fan heaters images
import FanH1 from "../../../assets/Images/ptoductsImg/fanheatersimags/fanheaters (1).png";
import FanH2 from "../../../assets/Images/ptoductsImg/fanheatersimags/fanheaters (2).png";
import FanH3 from "../../../assets/Images/ptoductsImg/fanheatersimags/fanheaters (3).png";
import FanH4 from "../../../assets/Images/ptoductsImg/fanheatersimags/fanheaters (4).png";
import FanH5 from "../../../assets/Images/ptoductsImg/fanheatersimags/fanheaters (5).png";
import FanH6 from "../../../assets/Images/ptoductsImg/fanheatersimags/fanheaters (6).png";
import FanH7 from "../../../assets/Images/ptoductsImg/fanheatersimags/fanheaters (7).png";

const Products = [
  {
    // this are the headinds for the drop down and prams and the main page heading
    id: "heating",
    name: "heating",
    subProducts: [
      // space heaters data
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
      //aluminum heaters data
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
      // box heaters data
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
      // PTC heatres data
      {
        id: "PTC-Enclosure-Heaters",
        title: "PTC Enclosure Heaters",
        productImg: PTC1,
        application: "For Panel Boards & Switchgear Industries",
        models: ["HGG 140 15W-150W"],
        features: [
          "Pressure clamp connectors",
          "Dynamic heating up",
          "Wide voltage range Temperature limiting Energy saving",
          "DIN rail mounted",
          "Quick installation",
        ],
        description: "",
        workingH: "Working Principle & Features",
        workingDetails: [
          "These heaters are used in enclosures where damage from condensation must be prevented, or where the temperature must be maintained above a minimum value. ",
          ". The aluminum profile heater body design has a chimney effect to distribute heat evenly. ",
          "The pressure clamp connectors save time and simplify installation.",
          "Mounting holes provided on one side.",
        ],
        tests: [],
        intended: "",
        uses: [],
        Installation: "",
        instructions: [],
        remark: "",
        recommendation: "",
        otherImages: [PTC2, PTC3, PTC4, PTC6, PTC5],
      },
      // combi heaters data
      {
        id: "COMBI-SPACE-HEATERS",
        title: "COMBI-SPACE HEATERS ",
        productImg: combi1,
        application: "with BUILT IN CAPILLARY THERMOSTAT",
        models: ["COMBI model"],
        features: [
          "Compact design",
          "Built-in Thermostat",
          "Stainless steel cover",
        ],
        description:
          "'GIRISHEGO' Combi Space Heaters with built-in capillary Thermostat are ideal for prevention of condensation, corrosion & Leakage currents in L.T. & H.T. Switchgear panel boards/electronic instruments & panels etc.",
        workingH: "Working Principle & Features",
        workingDetails: [
          "In this, a long life and sturdy extruded aluminium sheathed, mica insulated heater and an accurate capillary thermostat are place in a Rust resistant steel perforated body.  ",
          "A2x2.5 sqr. mm porcelain terminal block is provided for electrical connection. ",
          "The pressure clamp connectors save time and simplify installation.",
          "Mounting holes provided on one side.",
        ],
        tests: [],
        intended: "Intended Use",
        uses: [
          "Prevention of condensation, corrosion & Leakage currents in L.T. & H.T. ",
          "Switchgear panel boards, enclosures, switch boards, & electronic instruments etc.",
        ],
        Installation: "Installation",
        instructions: [
          "Four side slot holes for fixing tabs are provided for fitting the heater in the panel. ",
          "Installation can be done in vertical or horizontal position although vertical mounting is preferred. ",
          "Distance from surface of panel should be at least 10mm and distance from plastic parts should be at least 50mm. ",
          "Connection wire must be on the side or below to avoid warming up of the wire.",
        ],
        remark: "",
        recommendation: "",
        otherImages: [combi2, combi3, combi4, combi5],
      },
      // heavy duty heaters data
      {
        id: "HEAVY-DUTY-SLIM-SPACE-HEATER",
        title: "HEAVY DUTY SLIM SPACE HEATER ",
        productImg: HDH1,
        application: "with COVER FOR CONTINUOUS USE ",
        models: ["SJ-III model"],
        features: [
          "Flat body takes very less space inside enclosure Quick and uniform heating",
          "Fast dissipation of heat into air",
          "Withstands mechanical shock and vibration",
          "Very good insulation resistance",
        ],
        description:
          "'GIRISHEGO' make SJ-III model is a slim & Heavy duty space heater, it is encased in a specially designed Aluminum broad heat sink channel having a Perforated Protection cover for evenly distributed temperature within the enclosure/cabinet. It is highly recommended for continuous use for prevention of condensation, corrosion, Leakage currents in L.T. & H.T. Switchgears, Panel boards / electronic instruments & panels etc. Its is specially designed for continuos use.",
        workingH: "Working Principle & Features",
        workingDetails: [
          "Heater body is made of anodized heat sink grade extruded aluminium for fast dissipation of heat into air.",
          "High quality resistance heating element is insulated with mica for optimum insulation even in extreme humid conditions",
        ],
        tests: [],
        intended: "Intended Use",
        uses: [
          "Prevention of condensation, corrosion, Leakage currents in L.T. & H.T. Switchgear panel boards, enclosures, switch boards, & electronic instruments etc. ",
        ],
        Installation: "",
        instructions: [],
        remark: "Remark",
        recommendation:
          "It is recommended to use a 'GIRISHEGO' thermostat to control the heater.",
        otherImages: [HDH2, HDH3, HDH4, HDH5],
      },
      //fan heaters data
      {
        id: "Space-Saveing-Fan-Heaters",
        title: "SPACE-SAVEING FAN HEATERS ",
        productImg: FanH1,
        application: "with COVER FOR CONTINUOUS USE ",
        models: ["HV 031/HVL 031 100W-400W "],
        features: [
          "Compact",
          "Flat Design",
          "High Air throw-Flow",
          "Temperature safety cut-out",
          "DIN rail mounted",
        ],
        description:
          "",
        workingH: "Working Principle & Features",
        workingDetails: [
          "The compact high-performance fan heater prevents formation of condensation in control or systems and provides an evenly distributed interior air temperature in enclosures. ",
          "This fan heater is available without fan (SHV 031) as well as with fan (SHVL 031)",
        ],
        tests: [],
        intended: "",
        uses: [
          
        ],
        Installation: "",
        instructions: [],
        remark: "",
        recommendation:
          "",
        otherImages: [FanH2,FanH3,
FanH4,
FanH5,
FanH6,
 FanH7,],
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
