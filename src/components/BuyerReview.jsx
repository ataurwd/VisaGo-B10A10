import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    img: "https://img.freepik.com/free-photo/young-man-with-beard-white-t-shirt_273609-5760.jpg?semt=ais_hybrid",
    name: "John Doe",
    comment:
      "Amazing product! Highly recommended for anyone looking for quality and durability.",
    rating: 5,
  },
  {
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Jane Smith",
    comment:
      "Great service and quality! I'm really satisfied with my purchase.",
    rating: 5,
  },
  {
    img: "https://randomuser.me/api/portraits/women/25.jpg",
    name: "Alice Brown",
    comment:
      "I am extremely satisfied! Everything was perfect from start to finish.",
    rating: 4.5,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oefyDE-7gLUhY30yULF3UWQsNayEQwKrP9SFazVNN1ZZwP6UknX5tdsupwaPDJ0TAx8&usqp=CAU",
    name: "Michael Lee",
    comment:
      "Will definitely recommend! The best service I’ve had in a long time.",
    rating: 4,
  },
  {
    img: "https://randomuser.me/api/portraits/men/30.jpg",
    name: "Emily Davis",
    comment:
      "Excellent experience! Fast delivery and top-notch product quality.",
    rating: 5,
  },
  {
    img: "https://img.freepik.com/premium-photo/young-hispanic-man-yellow-background-holding-something-little-with-forefingers-smiling_1187-412038.jpg?semt=ais_hybrid",
    name: "Chris Wilson",
    comment: "Worth every penny! Quality exceeded my expectations.",
    rating: 4.5,
  },
  {
    img: "https://randomuser.me/api/portraits/women/10.jpg",
    name: "Sarah Johnson",
    comment:
      "Simply outstanding! From customer service to product quality, everything was perfect.",
    rating: 4.2,
  },
  {
    img: "https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=",
    name: "Daniel Martinez",
    comment: "Five stars all the way! I am extremely pleased with my purchase.",
    rating: 4,
  },
  {
    img: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Sophia Garcia",
    comment:
      "Highly recommended! The quality of the product is excellent and the service was outstanding.",
    rating: 4,
  },
  {
    img: "https://randomuser.me/api/portraits/women/47.jpg",
    name: "David Hernandez",
    comment:
      "Loved it! Everything was perfect from delivery to product quality.",
    rating: 4.5,
  },
];

const BuyerReview = () => {
  return (
    <div className=" py-10 px-5 md:px-20 rounded-lg w-full">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide bg-white p-6 shadow-md rounded-lg"
          >
            <div className="container flex flex-col w-full p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <img
                      src={review.img}
                      alt=""
                      className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{review.name}</h4>
                    <span className="text-xs dark:text-gray-600">
                      2 days ago
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                  </svg>
                            <span className="text-xl font-bold">{ review.rating}</span>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-600">
                <p>{review.comment}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BuyerReview;
