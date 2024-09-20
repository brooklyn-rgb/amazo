import { hashSync } from 'bcrypt-ts-edge'

const sampleData ={
  users: [
    {
      name: 'Mac',
      email: 'oflenstek@gmail.com',
      password: hashSync('9102', 10),
      role: 'admin',
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: hashSync('123456', 10),
      role: 'user',
    },
  ],
    products: [
        {
            name: 'CANON EOS 2000D with 18-55mm f/3.5-5.6 III Lens ',
            slug: 'canon-eos-2000d',
            category: "Canon",
            images: ['/assets/images/2000D.png', '/assets/images/2000D.png'],
            price: '5899',
            brand: 'Canon',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              '24.1 Megapixel CMOS (APS-C) Sensor with ISO 100-6400 (H: 12800) 3.0-inch LCD monitor DIGIC 4+ Image Processor 9-point autofocus and AI Servo AF Full HD 1080p video recording at 30 fps Built-in Wi-Fi & NFC Capability.',
            isFeatured: false,
            banner: '/assets/images/banner-1.jpeg',
          },
          {
            name: 'CANON EOS 4000D with 18-55mm Lens ',
            slug: 'canon-eos-4000d',
            category: "Canon",
            images: ['/assets/images/4000D.png', '/assets/images/4000D.png'],
            price: '4599',
            brand: 'Canon',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              'The Canon EOS 4000D starter kit is an affordable, entry-level DSLR that combines good image quality and a wide range of practical and easy to use features. The camera features a large 18MP APS-C CMOS sensor with good low light performance, a feature guide for users new to photography, Full HD video recording, as well as Wi-Fi connectivity to enable quick media sharing.',
              isFeatured: false,
              banner: '/assets/images/banner-2.jpeg',
          },
          {
            name: 'Sony HXR-NX3 NXCAM Professional Camcorder',
            slug: 'sony-HXR-NX3',
            category: "Sony",
            images: ['/assets/images/SonyNX3.png', '/assets/images/SonyNX3.png'],
            price: '32999',
            brand: 'Sony',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              'A multi-purpose professional camcorder offering exceptional image quality and three Full HD sensors ready to maximise your creative potential.',
            
          },
          {
            name: 'CANON EOS 77D with 18-55mm',
            slug: 'canon-77d',
            category: "Canon",
            images: ['/assets/images/c77D.png', '/assets/images/c77D.png'],
            price: '15999',
            brand: 'Canon',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              'The canon 77D is a 24 megapixel Canon Machine with powerful pictures and videos resolution that gives you best quality of pictures and videos.the FlipScreen and microphone input make your shoot very easier.',
            
          },
          {
            name: 'Sony A7 Mark III + 28-70mm Lens',
            slug: 'sony-A7-MarkIII',
            category: "Sony",
            images: ['https://utfs.io/f/wRli2eZYNna2H4HLUSCbCtZNPTS6AEDLVIvgqxukdXz18J9Q', 'https://utfs.io/f/wRli2eZYNna2jzLLGHkzrA0Q91HFaZCIkgGpiPhjKUysVwJS'],
            price: '39999',
            brand: 'Sony',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              'Specifications & Features Phenomenal AF performance and 10 fps continuous shooting Full-frame 4K HDR movie recording and pro-class movie features Newly developed 24.2MP 35mm full-frame Exmor R CMOS sensor and enhanced image processing Sensitivity range up to ISO 51200 (expandable to ISO 50-204800 for stills) Fast Hybrid AF with 693 phase-detection and 425 contrast-detection AF points. High-speed continuous shooting of up to 10 fps 1 with AF/AE tracking.',
            
          },
          {
            name: 'Nikon D5300 Digital SLR with 18-55mm VR Lens',
            slug: 'Nikon-D5300',
            category: "Nikon",
            images: ['https://utfs.io/f/wRli2eZYNna2QJQg0vmOW8k6oheqtwxmIujTLRGsdnrMBpYS', 'https://utfs.io/f/wRli2eZYNna289OKrmyci7NOmALfnQ0usawZgW12zoD6vUyV', 'https://utfs.io/f/wRli2eZYNna2XOHYjKJnJieO6SmWtCN0owDbEkfsGgxZr9V5'],
            price: '7999',
            brand: 'Nikon',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              'Specifications: Brand Nikon Model Name Nikon D5300 Mounting Type	Bayonet Video Capture Format MPEG-4, AVC Color	Black Form Factor	Compact Connectivity Technology	USB, HDMI Photo Sensor Technology	CMOS.',
            
          },
          {
            name: 'Canon 200D with 18-55mm STM Lens',
            slug: 'Canon-200D',
            category: "Canon",
            images: ['https://utfs.io/f/wRli2eZYNna2o87qQQAf8uFY9x3rpg7ljMeo6iGq2hQJAISV', 'https://utfs.io/f/wRli2eZYNna2b3xa9MrCgSOhtTbrpjsMV84cFxyB0KHm7ZEQ'],
            price: '32999',
            brand: 'Canon',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              'Specifications: 24.2MP APS-C CMOS Sensor DIGIC 7 Image Processor 3" 1.04m-Dot Vari-Angle Touchscreen LCD Full HD 1080p Video Recording at 60 fps 9-Point AF System; Dual Pixel CMOS AF Native ISO 25600, Extended to ISO 51200 Up to 5 fps Continuous Shooting Feature Assistant; Microphone Input Built-In Wi-Fi with NFC and Bluetooth EF-S 18-55mm f/4-5.6 IS STM Lens',
            
          },
          {
            name: 'Canon LPE-6NH Battery',
            slug: 'battery-lpe-6nh',
            category: "Batteries",
            images: ['https://utfs.io/f/wRli2eZYNna2x9Yvfjn2u4DCUpjB3TXbk1ozcVaYNZfRe0nt', 'https://utfs.io/f/wRli2eZYNna24giX1BFpRGXvTljMAc7d3y0bsWtZEmeqHFgk'],
            price: '2899',
            brand: 'Canon',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              'The Canon LP-E6NH battery pack was designed for Canon&nbsp;s DSLR Camera bodies and packs a ton of power. Power your EOS DSLR Camera with this Canon LP-E6NH li ion battery. It is compatible with the LC-E6 and LC-E6E chargers. Compatible Cameras EOS 7D Mark II EOS 7D EOS 5D Mark III EOS 5D Mark II EOS 60D EOS 60Da EOS 70D EOS 6D.',
            
          },
          {
            name: 'PVC 3x6m White Vinyl Backdrop with 50mm Aluminium Crossbar',
            slug: 'White-Backdrop-3x6m',
            category: "Backdrop",
            images: ['https://utfs.io/f/wRli2eZYNna2Fypo0IN32I1NpHeY5ODKL8htliJ9QycgSamP', 'https://utfs.io/f/wRli2eZYNna2Fypo0IN32I1NpHeY5ODKL8htliJ9QycgSamP'],
            price: '2699',
            brand: 'Backdrop',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              'Specifications: Material: Polyvinyl Chloride (PVC) Dual-sided: White and Black Dimensions: 3.2x6m Weight: 12kg Core: Aluminium Crossbar Thickness: 50mm Crossbar Length: 340cm Crossbar Holes Diameter: 15mm Finish: Matte',
            
          },
          {
            name: 'Canon 90D with 18-135mm Lens',
            slug: 'canon-90d',
            category: "Canon",
            images: ['https://utfs.io/f/wRli2eZYNna2XEGmHmJnJieO6SmWtCN0owDbEkfsGgxZr9V5', 'https://utfs.io/f/wRli2eZYNna24OBLbpFpRGXvTljMAc7d3y0bsWtZEmeqHFgk', 'https://utfs.io/f/wRli2eZYNna2CFK5WsADajuJykehx2CqdU3V8YnmRfgtQZ1p'],
            price: '28999',
            brand: 'Canon',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              ' 32.5MP APS-C CMOS Sensor: Canon EOS 90D + 18-135mm IS USM Lens, the EOS 90D is ideal for sports and wildlife photography and a fast DSLR camera that takes you closer! (Refurbished)',
            
          },
          {
            name: 'Canon EOS 5D Mark IV + 24-105mm Lens DSLR',
            slug: 'canon-5d-mark-iv',
            category: "Canon",
            images: ['https://utfs.io/f/wRli2eZYNna2j5HviOLkzrA0Q91HFaZCIkgGpiPhjKUysVwJ', 'https://utfs.io/f/wRli2eZYNna2wLTJ2rZYNna254LJukyCrq13tisHgDV09MAQ', 'https://utfs.io/f/wRli2eZYNna2aZ2FH0Lun0Y3UMFOg4SLoGEA7QXZb9wqkVhK'],
            price: '44999',
            brand: 'Canon',
            rating: '4.5',
            numReviews: 10,
            stock: 9,
            description:
              'Canon EOS 5D Mark IV + EF 24-105mm f4 L IS USM II DSLR camera. The EOS 5D Mark IV 24-105mm camera builds on the powerful legacy of the 5D series, offering amazing refinements in image quality, performance, and versatility. Focus accuracy has been improved with a refined 61-point AF system and Canon&nbsp;s revolutionary Dual Pixel CMOS AF for quick, smooth AF for both video and Live View shooting (Refurbished).',
            
          },
          {
            name: 'Godox MS200-F Double Strobe Studio Light Kit',
            slug: 'Godox-MS200-F',
            category: "Godox",
            images: ['https://utfs.io/f/wRli2eZYNna2W1DhdxKakCpm9RVBUhEcTPeyJXQr2ZgqYwFn', 'https://utfs.io/f/wRli2eZYNna2j1o1x7kzrA0Q91HFaZCIkgGpiPhjKUysVwJS', 'https://utfs.io/f/wRli2eZYNna2YE9xikp0MbGqjkasw1ghpmRZdFfOVt68uNXT'],
            price: '13899',
            brand: 'Godox',
            rating: '4.5',
            numReviews: 6,
            stock: 8,
            description:
              'Godox MS200-F Double Studio Strobe Monolight Kit. In the Godox MS200-F Double Studio Strobe Monolight Kit studio kit, you get all the gear you need to start your own home studio lighting set up. The MS-series studio strobes are lightweight, compact, and durable studio flashes with a variety of useful features. This particular MS-200 model has a Guide Number of GN53, variable power from 1/32 to full power, with 50-steps of adjustable output and a 150W halogen modeling lamp. Furthermore, the MS-200 makes use of the Godox X-system; making it directly compatible with all of the Godox X Flash Triggers.',
            
          },

    ]
}

export default sampleData