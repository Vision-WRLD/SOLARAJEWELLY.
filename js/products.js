const PRODUCTS = [
  {
    id:"solar-arch-ring",
    name:"Solar Arch Diamond Ring",
    category:"rings",
    price:380,
    colours:["Gold","Silver","Rose Gold"],
    sizes:["5","6","7","8","9"],
    description:"A luminous ring with a Persian arch-inspired setting and brilliant stone detail.",
    images:[
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"shiraz-halo-necklace",
    name:"Shiraz Halo Necklace",
    category:"necklaces",
    price:640,
    colours:["Gold","Silver"],
    sizes:["16 in","18 in","20 in"],
    description:"A refined halo necklace with soft golden glow and evening-wear presence.",
    images:[
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"isfahan-bracelet",
    name:"Isfahan Crystal Bracelet",
    category:"bracelets",
    price:290,
    colours:["Gold","Rose Gold"],
    sizes:["Small","Medium","Large"],
    description:"A delicate bracelet inspired by Persian mosaic rhythm and crystal shimmer.",
    images:[
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620656798579-1984d9e87dfb?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"noor-drop-earrings",
    name:"Noor Drop Earrings",
    category:"earrings",
    price:240,
    colours:["Gold","Silver","Rose Gold"],
    sizes:["One Size"],
    description:"Elegant drop earrings made to catch light with every movement.",
    images:[
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620656798579-1984d9e87dfb?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"royal-tennis-bracelet",
    name:"Royal Tennis Bracelet",
    category:"bracelets",
    price:1180,
    colours:["Silver","Gold"],
    sizes:["Small","Medium","Large"],
    description:"A high-shine tennis bracelet with premium crystal brilliance.",
    images:[
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"zarin-sun-pendant",
    name:"Zarin Sun Pendant",
    category:"necklaces",
    price:520,
    colours:["Gold","Rose Gold"],
    sizes:["16 in","18 in","22 in"],
    description:"A sun-inspired pendant designed as a signature SolaraJewelly piece.",
    images:[
      "https://images.unsplash.com/photo-1620656798579-1984d9e87dfb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"parisa-pave-ring",
    name:"Parisa Pavé Ring",
    category:"rings",
    price:760,
    colours:["Gold","Silver"],
    sizes:["5","6","7","8","9"],
    description:"A pavé ring with a clean luxury silhouette and strong sparkle.",
    images:[
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"darya-crystal-hoops",
    name:"Darya Crystal Hoops",
    category:"earrings",
    price:180,
    colours:["Gold","Silver","Rose Gold"],
    sizes:["Small","Medium"],
    description:"Crystal hoops with a polished luxury finish for everyday shine.",
    images:[
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620656798579-1984d9e87dfb?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"saffron-rope-chain",
    name:"Saffron Rope Chain",
    category:"necklaces",
    price:340,
    colours:["Gold"],
    sizes:["18 in","20 in","24 in"],
    description:"A warm gold rope chain with a bold but refined profile.",
    images:[
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620656798579-1984d9e87dfb?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"azadi-oval-ring",
    name:"Azadi Oval Ring",
    category:"rings",
    price:980,
    colours:["Silver","Gold"],
    sizes:["6","7","8"],
    description:"An oval centrepiece ring with a high jewellery feel.",
    images:[
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"mina-gold-cuff",
    name:"Mina Gold Cuff",
    category:"bracelets",
    price:420,
    colours:["Gold","Rose Gold"],
    sizes:["Small","Medium","Large"],
    description:"A bold cuff with soft curves and a boutique finish.",
    images:[
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620656798579-1984d9e87dfb?auto=format&fit=crop&w=1000&q=80"
    ]
  },
  {
    id:"crystal-palace-studs",
    name:"Crystal Palace Studs",
    category:"earrings",
    price:150,
    colours:["Silver","Gold"],
    sizes:["One Size"],
    description:"Minimal crystal studs with clean shine and timeless appeal.",
    images:[
      "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620656798579-1984d9e87dfb?auto=format&fit=crop&w=1000&q=80"
    ]
  }
];