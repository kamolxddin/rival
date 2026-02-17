'use client'
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "@/constants/products";

const Products = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };
  return (
    <section id="products" className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
            Bizning loyihalarimiz
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Amalga oshirilgan ishlarimizdan namunalar
          </p>
        </motion.div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-xl hover:bg-gray-50 transition-all hover:scale-110"
            aria-label="Oldingi"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-900" />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-xl hover:bg-gray-50 transition-all hover:scale-110"
            aria-label="Keyingi"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-900" />
          </button>

          {/* Slider */}
          <Slider ref={sliderRef} {...settings} className="product-slider">
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm mx-auto max-w-sm"
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-gray-900/90 backdrop-blur-sm text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      {product.category}
                    </div>
                  </div>

                  {/* Content Below Image */}
                  <div className="p-4 sm:p-5 lg:p-6 text-center">
                    <h3 className="text-base sm:text-lg lg:text-xl text-gray-900 mb-2 sm:mb-3 font-semibold leading-tight line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-3">
                      {product.description}
                    </p>
                    <div className="pt-3 sm:pt-4 border-t border-gray-100">
                      <span className="text-lg sm:text-xl lg:text-2xl text-gray-900 font-bold block mb-1">
                        {product.price}
                      </span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        so'm
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12 sm:mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-base sm:text-lg font-medium"
          >
            Barcha loyihalar
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        .product-slider .slick-dots {
          bottom: -45px;
        }
        .product-slider .slick-dots li {
          margin: 0 3px;
        }
        .product-slider .slick-dots li button:before {
          font-size: 10px;
          color: #9ca3af;
        }
        .product-slider .slick-dots li.slick-active button:before {
          color: #1f2937;
          font-size: 12px;
        }
        .product-slider .slick-slide {
          transition: all 0.3s ease;
          opacity: 0.6;
        }
        .product-slider .slick-center {
          opacity: 1;
        }
        .product-slider .slick-list {
          overflow: visible;
        }
        @media (max-width: 1024px) {
          .product-slider .slick-slide {
            opacity: 1;
          }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Products;
