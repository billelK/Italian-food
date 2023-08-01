<template>
  <div class x-data="{navbarOpen: false}" id="app">
    <nav
      class="overflow-hidden px-[100px] absolute top-0 lg:h-[120px] h-[75px] 2xl:gap-[1090px] xl:gap-[465px] lg:gap-[200px] md:gap-[120px] gap-[5px] flex justify-between items-center px-7 py-[10px] z-[1000] w-full"
    >
      <a href="#">
        <img
          class="pb-[20px] lg:h-[73px] lg:w-[221px] md:h-[70px] md:w-[150px] md:[10px] h-[60px] w-[130px]"
          src="./assets/images/nav-bar/Logo.png"
          alt="website logo"
        />
      </a>

      <button class="md:hidden ml-[150px] z-[500]" @click="navbarOpen">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-9 w-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>

      <div>
        <div>
          <ul
            class="h-[100px] w-full transform translate-x-0 flex flex-row items-center text-[14px] max[1024]-text-[10px] gap-10 font-MB cursor-pointer max-[768px]:hidden max[1024]:h-[15px] max[1024]:w-[15px]"
          >
            <li>
              <a class="hover:text-[20px] transition delay-700" href="#">HOME</a>
            </li>
            <li>
              <a class="hover:text-[20px] transition delay-700" href="#">MENU</a>
            </li>
            <li>
              <a class="hover:text-[20px] transition delay-700" href="#">OUR STORY</a>
            </li>
            <li>
              <a class="hover:text-[20px] transition delay-700" href>CONTACT US</a>
            </li>
          </ul>
        </div>

        <div>
          <ul
            class="small-nav fixed bg-[#e8e6a8] top-0 right-0 w-screen pt-[16px] min-h-screen space-y-5 font-MB text-[18px] cursor-pointer invisible"
          >
            <li>
              <a class="ml-[15px] text-[20px]" href="#">HOME</a>
            </li>
            <li>
              <a class="ml-[15px] text-[20px]" href="#">MENU</a>
            </li>
            <li>
              <a class="ml-[15px] text-[20px]" href="#">OUR STORY</a>
            </li>
            <li>
              <a class="ml-[15px] text-[20px]" href>CONTACT US</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="hero-section">
      <div
        class="h-screen w-full xl:px-[100px] lg:px-[100px] lg:px-[150px] lg:flex lg:flex-row lg:items-center md:flex md:flex-col md:items-center items-center justify-between relative"
      >
        <img
          data-aos="zoom-in"
          data-aos-delay="500"
          class="absolute top-0 left-0 2xl:w-[59px] 2xl:h-[96px] 2xl:mt-[250px] 2xl:ml-[220px] xl:mt-[170px] xl:ml-[120px] lg:w-[42px] lg:h-[60px] lg:mt-[220px] lg:ml-[60px] md:w-[59px] md:h-[96px] md:mt-[200px] md:ml-[140px] w-[42px] h-[60px] mt-[110px] ml-[50px]"
          src="./assets/images/hero-section/Leaf.png"
          alt="leaf 1"
        />

        <img
          data-aos="zoom-in"
          data-aos-delay="400"
          class="absolute bottom-0 right-0 2xl:w-[83px] 2xl:h-[90px] 2xl:mb-[200px] 2xl:mr-[200px] xl:mb-[160px] xl:mr-[160px] lg:w-[68px] lg:h-[75px] lg:mb-[140px] lg:mr-[100px] md:w-[83px] md:h-[90px] md:mb-[130px] md:mr-[60px] w-[68px] h-[75px] mb-[40px] mr-[20px]"
          src="./assets/images/hero-section/Leaf2.png"
          alt="leaf 2"
        />

        <img
          data-aos="zoom-in"
          data-aos-delay="350"
          class="absolute 2xl:mt-[230px] 2xl:w-[95px] 2xl:h-[96px] xl:mt-[80px] xl:ml-[100px] lg:mt-[50px] lg:ml-[100px] lg:w-[70px] lg:h-[70px] md:ml-[600px] md:w-[95px] md:h-[96px] md:mt-0 mt-[400px] ml-[300px] w-[70px] h-[70px]"
          src="./assets/images/hero-section/Pasta.png"
          alt="pasta"
        />

        <img
          data-aos="zoom-in"
          data-aos-delay="300"
          class="absolute z-[600] 2xl:bottom-[-250px] left-0 2xl:w-[240px] 2xl:h-[511px] md:bottom-[-200px] md:w-[190px] md:h-[430px] bottom-[-150px] w-[140px] h-[300px]"
          src="./assets/images/hero-section/Spaghetti.png"
          alt="spaghetti"
        />

        <img
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-anchor-placement="bottom-bottom"
          class="absolute 2xl:top-0 2xl:w-[81px] 2xl:h-[81px] 2xl:mb-[60px] 2xl:mt-[800px] 2xl:ml-[800px] xl:top-0 xl:w-[70px] xl:h-[70px] xl:mb-[450px] xl:ml-[600px] lg:top-0 lg:w-[70px] lg:h-[70px] lg:mb-0 lg:mt-[600px] lg:ml-[400px] md:inset-y-0 left-0 md:w-[81px] md:h-[81px] md:mt-[540px] md:ml-[30px] bottom-0 w-[70px] h-[70px] mb-[280px]"
          src="./assets/images/hero-section/Tomato.png"
          alt="tomato"
        />

        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          data-aos-delay="500"
          class="flex flex-col justify-center items-center lg:pt-[20px] md:pt-[200px] pt-[100px]"
        >
          <div class="flex flex-col items-center mb-[20px]">
            <h3
              class="font-G 2xl:text-[60px] xl:text-[45px] lg:text-[30px] md:text-[60px] text-[30px]"
            >Are You Hungry?</h3>
            <h4
              class="font-F 2xl:text-[80px] xl:text-[53px] lg:text-[40px] md:text-[80px] text-[40px]"
            >DONT WAIT!</h4>
            <h2
              class="font-MB 2xl:text-[30px] xl:text-[17px] lg:text-[13px] md:text-[30px] mb-[25px] text-[13px]"
            >LETS START TO ORDER FOOD NOW</h2>
            <hr class="hr-el 2xl:w-[550px] xl:w-[330px] lg:w-[250px] md:w-[550px] w-[250px]" />
          </div>
          <div
            class="flex flex-row items-center 2xl:mb-[40px] xl:mb-[25px] lg:mb-[25px] md:mb-[40px] mb-[25px]"
          >
            <p
              class="font-F 2xl:text-[20px] 2xl:h-[50px] 2xl:w-[180px] xl:text-[18px] xl:h-[45px] xl:w-[200px] lg:text-[12px] lg:h-[37px] lg:w-[120px] md:text-[20px] md:h-[50px] md:w-[180px] text-[12px] h-[37px] w-[120px]"
            >
              THIS MONDAY
              <br />HAPPY HOURS
            </p>

            <p
              class="font-F 2xl:text-[60px] xl:text-[50px] lg:text-[33px] md:text-[60px] text-[33px]"
            >1+1=3</p>
          </div>
          <button
            class="btn-hero font-MEB xl:w-[250px] xl:h-[70px] xl:text-[20px] lg:w-[150px] lg:h-[48px] lg:text-[13px] md:w-[250px] md:h-[70px] md:text-[20px] w-[150px] h-[48px] text-[13px] xl:hover:w-[270px] xl:hover:h-[80px] lg:hover:w-[170px] lg:hover:h-[58px] md:hover:w-[270px] md:hover:h-[80px] :hover:w-[170px] :hover:h-[58px]"
          >ORDER NOW</button>
        </div>
        <img
          data-aos-anchor-placement="center-bottom"
          data-aos="fade-up-left"
          data-aos-delay="500"
          class="aspect-square 2xl:w-[800px] lg:w-2/3 md:w-[450px]"
          src="./assets/images/hero-section/plate.png"
          alt="plate"
        />
      </div>
    </div>

    <div class="section-two overflow-hidden">
      <div class="flex flex-row md:flex md:flex-col md:items-center justify-between h-full">
        <div
          data-aos="zoom-out-down"
          data-aos-delay="300"
          class="flex flex-col mt-[90px] mb-[70px] lg:mb-[20px] 2xl:mb-[60px] items-center max-[767px]:hidden"
        >
          <h2 class="font-F text-black text-[60px] text-center mb-[20px]">CHOOSE & ENJOY</h2>
          <p
            class="lorem-p-el font-MR xl:w-[1050px] md:w-[800px] w-[300px] text[13px] text-center"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <img
          data-aos="zoom-out-down"
          data-aos-delay="300"
          class="h-100% 2xl:w-[1400px] xl:w-[1050px] lg:w-[870px] w-[800px] max-[767px]:hidden"
          src="./assets/images/section-two/Image-md.png"
          alt="plates"
        />
        <div
          data-aos="zoom-out-down"
          data-aos-delay="300"
          data-aos-anchor-placement="bottom-bottom"
          class="flex flex-col md:flex md:flex-row md:gap-[80px] xl:gap-[180px] 2xl:gap-[200px] items-center h-full mt-[170px] md:mt-[60px] lg:mt-[20px] lg:gap-[100px] gap-[100px]"
        >
          <div class="flex flex-col items-center">
            <h1
              class="font-MB text-center text-[15px] h-[30px] w-[200px] 2xl:uppercase md:text-[18px] md:h-[30px] md:w-[200px] 2xl:w-[250px]"
            >Lorem ipsum dolor</h1>
            <p
              class="font-MR text-center text-[10px] w-[200px] 2xl:w-[300px] md:text-[14px] mb-5"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button class="small-btn font-MB text-[14px] hover:h-[40px] hover:w-[150px]">ORDER NOW</button>
          </div>
          <div class="flex flex-col items-center">
            <h1
              class="font-MB text-center text-[15px] h-[30px] w-[200px] 2xl:uppercase md:text-[18px] md:h-[30px] md:w-[200px] 2xl:w-[250px]"
            >Lorem ipsum dolor</h1>
            <p
              class="font-MR text-center text-[10px] w-[200px] 2xl:w-[300px] md:text-[14px] mb-5"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button class="small-btn font-MB text-[14px] hover:h-[40px] hover:w-[150px]">ORDER NOW</button>
          </div>
          <div class="flex flex-col items-center">
            <h1
              class="font-MB text-center text-[15px] h-[30px] w-[200px] 2xl:uppercase md:text-[18px] md:h-[30px] md:w-[200px] 2xl:w-[250px]"
            >Lorem ipsum dolor</h1>
            <p
              class="font-MR text-center text-[10px] w-[200px] 2xl:w-[300px] md:text-[14px] mb-5"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
            <button class="small-btn font-MB text-[14px] hover:h-[40px] hover:w-[150px]">ORDER NOW</button>
          </div>
        </div>
        <img
          data-aos="zoom-out-left"
          data-aos-delay="300"
          class="plates h-full w-[200px] pt-[120px] md:hidden"
          src="./assets/images/section-two/Image.png"
          alt="plates"
        />
      </div>
    </div>

    <div class="slider-section overflow-hidden">
      <div
        data-aos="zoom-out-down"
        data-aos-delay="300"
        class="flex flex-col items-center my-[100px]"
      >
        <p class="font-MB md:text-[23px] text-[18px]">DISCOVER</p>
        <h3 class="font-F md:text-[50px] text-[35px] mb-6">UPCOMING EVENTS</h3>
        <p
          class="lorem-p-el font-MR xl:w-[1020px] md:w-[800px] w-[300px] lg:text[10px] md:text[13px] text-center"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>

      <div
        data-aos="zoom-out-up"
        data-aos-delay="300"
        class="slider lg:w-full relative md:h-[500px] h-[200px] flex flex-row justify-center items-center gap-0"
      >
        <img
          class="absolute md:w-[404px] w-[180px] md:h-[351px] h-[135px] md:mr-[1050px] md:mb-0 mr-[220px] mb-2"
          src="./assets/images/slider-section/Image-one.png"
          alt="img1"
        />
        <img
          class="z-[400] absolute md:w-[798px] md:h-[509px] md:ml-0 w-[300px] h-[209px] ml-[8px] hover:w-[805px] hover:h-[515px]"
          src="./assets/images/slider-section/Image-two.png"
          alt="img2"
        />
        <img
          class="absolute md:w-[404px] w-[180px] md:h-[351px] h-[135px] md:ml-[1050px] md:mb-0 ml-[220px] mb-2"
          src="./assets/images/slider-section/Image-three.png"
          alt="img3"
        />
      </div>
    </div>

    <div class="section-foor overflow-hidden">
      <div
        class="flex flex-row px-[50px] max-[768px]:flex max-[768px]:flex-col gap-[36px] justify-center pt-[100px]"
      >
        <div
          data-aos="zoom-out-left"
          data-aos-delay="300"
          class="relative flex flex-col cursor-pointer"
        >
          <img
            class="xl:w-[405px] xl:h-[380px] lg:h-[310px] lg:w-[400px] md:h-[288px] max-[1024px]:w-[600px] max-[1024px]:h-[380px] max-[768px]:w-[500px] max-[768px]:h-[300px] max-[1024px]:w-[600px] max-[1024px]:h-[300px]"
            src="./assets/images/section-foor/Image1.png"
            alt="image1"
          />
          <p
            class="absolute font-MB text-white lg:text-[20px] lg:mt-[40px] lg:ml-[45px] md:text-[20px] md:mt-[20px] md:ml-[25px] text-[20px] mt-[20px] ml-[25px]"
          >TRY IT TODAY</p>

          <p
            class="absolute font-MB text-white lg:text-[25px] lg:mt-[68px] lg:ml-[45px] md:text-[27px] md:mt-[45px] md:ml-[25px] text-[27px] mt-[45px] ml-[25px]"
          >
            MOST
            <br />POPULAR
            <br />PASTA
          </p>
        </div>
        <div data-aos="zoom-out-right" data-aos-delay="300" class="flex flex-col gap-9">
          <div class="relative flex flex-col cursor-pointer">
            <img
              class="2xl:w-[595px] 2xl:h-[192px] xl:w-[595px] xl:h-[170px] lg:w-[485px] lg:h-[140px] md:w-[485px] md:h-[125px]"
              src="./assets/images/section-foor/Image2.png"
              alt="image2"
            />
            <p
              class="absolute font-MB text-white lg:text-[25px] lg:mt-[20px] lg:ml-[25px] md:text-[20px] md:mt-[15px] md:ml-[25px] text-[20px] mt-[10px] ml-[25px]"
            >TRY IT TODAY</p>

            <P
              class="absolute font-MB text-white lg:text-[25px] lg:mt-[50px] lg:ml-[25px] md:text-[26px] md:mt-[43px] md:ml-[25px] text-[27px] mt-[40px] ml-[25px]"
            >
              MORE FUN
              <br />MORE TASTE
            </P>
          </div>
          <div class="relative flex flex-col cursor-pointer">
            <img
              class="2xl:w-[595px] 2xl:h-[192px] xl:w-[595px] xl:h-[170px] lg:w-[485px] lg:h-[140px] md:w-[485px] md:h-[125px]"
              src="./assets/images/section-foor/Image3.png"
              alt="Image3"
            />
            <p
              class="absolute font-MB text-white lg:text-[25px] lg:mt-[20px] lg:ml-[25px] md:text-[20px] md:mt-[20px] md:ml-[25px] text-[20px] mt-[35px] ml-[25px]"
            >TRY IT TODAY</p>
            <P
              class="absolute font-MB text-white lg:text-[36px] lg:mt-[50px] lg:ml-[25px] md:text-[27px] md:mt-[45px] md:ml-[25px] text-[27px] mt-[60px] ml-[25px]"
            >FRESH & CHILI</P>
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-out-down"
        data-aos-delay="300"
        class="flex flex-col items-center mt-[100px]"
      >
        <p class="font-MB md:text-[21px] text-[18px]">RESERVATION</p>
        <h3 class="font-F md:text-[50px] text-[35px]">BOOK YOUR TABLE</h3>
      </div>
      <div>
        <div
          data-aos="zoom-out-left"
          data-aos-delay="300"
          class="flex flex-row max-[768px]:flex max-[768px]:flex-col max-[768px]:items-cneter justify-center gap-8 pt-[70px] pb-[100px]"
        >
          <div class="flex flex-col gap-8 items-center">
            <input
              class="input-el rounded text-[20px] font-MR max-[1024px]:w-[350px] max-[768px]:w-[350px]"
              type=" text"
              placeholder="Name"
            />
            <input
              class="input-el rounded text-[20px] font-MR max-[1024px]:w-[350px] max-[768px]:w-[350px]"
              type=" text"
              placeholder="Date"
            />
            <input
              class="input-el rounded text-[20px] font-MR max-[1024px]:w-[350px] max-[768px]:w-[350px]"
              type=" text"
              placeholder="People"
            />
          </div>
          <div class="flex flex-col gap-8 items-center">
            <input
              class="input-el rounded text-[20px] font-MR max-[1024px]:w-[350px] max-[768px]:w-[350px]"
              type=" text"
              placeholder="Email"
            />
            <input
              class="input-el rounded text-[20px] font-MR max-[1024px]:w-[350px] max-[768px]:w-[350px]"
              type=" text"
              placeholder="Time"
            />
            <button
              class="small-btn rounded font-MB text-[20px] h-[60px] xl:w-[400px] w-[350px]"
            >FIND A TABLE</button>
          </div>
        </div>
      </div>
    </div>

    <div class="footer py-6 overflow-hidden">
      <div
        data-aos="zoom-out-down"
        data-aos-delay="300"
        class="flex flex-col max-[1023px]:items-center 2xl:mb[100px] md:ml-0 ml-[0px]"
      >
        <div class="flex flex-row max-[1023px]:flex max-[1023px]:flex-col justify-around">
          <div class="flex flex-col lg:items-start items-center h-auto gap-[30px]">
            <img
              class="md:w-[311px] w-[311px]"
              src="./assets/images/footer/footer-logo.png"
              alt="food for you yellow logo"
            />
            <p
              class="font-MR text-white lg:text-start text-center text-[16px] h-auto md:w-[415px] w-[315px]"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viver ra maecenas accumsan lacus vel facilisis.</p>
          </div>
          <div
            class="flex flex-col lg:items-start items-center gap-[30px] lg:mt-[110px] max-[1023px]:mt-[30px]"
          >
            <div class="flex flex-row gap-4 cursor-pointer">
              <img
                class="w-[21px] h-[25px]"
                src="./assets/images/footer/Location-Icon.png"
                alt="location logo"
              />
              <p class="font-MM text-white">Main Road, Building Name, Country</p>
            </div>
            <div class="flex flex-row gap-4 cursor-pointer">
              <img
                class="w-[25px] h-[20px]"
                src="./assets/images/footer/Email.png"
                alt="Email logo"
              />
              <p class="font-MM text-white">info@companyname.com</p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-row lg:px-[65px] xl:px-[130px] 2xl:px-[290px] max-[1023px]:items-center items-start mt-[30px] max-[1023px]:flex max-[1023px]:flex-col-reverse max-[1023px]:gap-[30px] justify-between max-[1023px]:mt-[30px]"
        >
          <p
            class="font-MR text-white xl:mr-[0px] lg:mr-[0px] max-[1023px]:mb-[0px]"
          >© Company Name 2020. All rights reserved.</p>
          <div
            class="flex flex-row justify-around items-start xl:mb[100px] lg:w-[200px] max-[1023px]:w-[200px]"
          >
            <img
              class="w-[30px] h-[30px] cursor-pointer hover:h-[48px] hover:w-[48px]"
              src="./assets/images/footer/Instagram.png"
              alt="instagram"
            />
            <img
              class="w-[30px] h-[30px] cursor-pointer hover:h-[48px] hover:w-[48px]"
              src="./assets/images/footer/Facebook.png"
              alt="facebook"
            />
            <img
              class="w-[30px] h-[30px] cursor-pointer hover:h-[48px] hover:w-[48px]"
              src="./assets/images/footer/Twitter.png"
              alt="twitter"
            />
            <img
              class="w-[30px] h-[30px] cursor-pointer hover:h-[48px] hover:w-[48px]"
              src="./assets/images/footer/WhatsApp.png"
              alt="whatsapp"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      photos: ["Image-one.png", "Image-two.png", "Image-three.png"]
    };
  },

  methods: {
    navbarOpen() {
      const nav = document.querySelector(".small-nav");
      nav.classList.toggle("show-nav");
      nav.classList.toggle("hide-nav");
    }
  },

  mounted() {
    /*  Swiper2.use([Autoplay]) */
  }
};
</script>

<style>
/*   html, body {
    height: 100%;
    width: 100%;
    margin: 0;
  } */

.swiper-container {
  height: 600px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

.my-swiper {
  width: 70%;
  overflow: visible;
}

.input-el {
  background-color: transparent;
  color: black;
  border: 1px solid black;
  border-radius: 2px;
  height: 60px;
  width: 400px;
  padding-left: 20px;
}

.small-btn {
  background-color: #ffe100;
  color: black;
  padding: 8px 20px;
  cursor: pointer;
}

/* .lorem-p-el{
  size: 50px;
  height: 50px;
  width: 1050px;
  text-align: center;
}
 */

.hr-el {
  text-align: center;
  border: 1px solid #d6b400;
}

.btn-hero {
  border: 1px solid black;
  background-color: transparent;
  color: black;
  padding: 14px 28px;
  cursor: pointer;
}

.hero-section {
  background-image: url("./assets/images/hero-section/Group-1-md.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  width: 100%;
  min-height: 100vh;
}

@media only screen and (min-width: 1024px) {
  .hero-section {
    background-image: url("./assets/images/hero-section/Group-1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 100vh;
  }
}

.section-two {
  background-image: url("./assets/images/section-two/Group-3-bg-mobile.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
}

@media only screen and (min-width: 768px) {
  .section-two {
    background-image: url("./assets/images/section-two/Group-3-bg-md.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100vw;
    min-height: 900px;
  }
}

@media only screen and (min-width: 1024px) {
  .section-two {
    background-image: url("./assets/images/section-two/Group-3-bg-lg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 100vh;
  }
}

.footer {
  background-image: url("./assets/images/footer/BG-Image.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 75%;
  width: 100%;
  min-height: 0vh;
}

@media only screen and (min-width: 768px) {
  .footer {
    background-image: url("./assets/images/footer/BG-Image.png");
    background-repeat: no-repeat;
    background-size: conver;
    width: 100%;
    min-height: 0vh;
  }
}

@media only screen and (min-width: 1024px) {
  .footer {
    background-image: url("./assets/images/footer/BG-Image.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 0vh;
  }
}

@media only screen and (min-width: 1280px) {
  .footer {
    background-image: url("./assets/images/footer/BG-Image.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    min-height: 0px;
  }
}

@media only screen and (min-width: 1536px) {
  .footer {
    background-image: url("./assets/images/footer/BG-Image.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    min-height: 0px;
  }
}
</style>
