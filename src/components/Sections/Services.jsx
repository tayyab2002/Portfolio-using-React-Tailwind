import React from "react";
import servicesData from "../../data/details.json";
const Services = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-[50px]" >
      <div className="text-3xl text-center md:text-4xl font-bold font-mono md:pb-4">
        Services
      </div>
      <div className="px-5 md:grid grid-cols-3 gap-8 py-5">
        {servicesData.services.map((items) => {
          return (
            <div key={items.id} className="max-w-[1240px] my-5 rounded-3xl shadow-2xl hover:scale-105 duration-500">
              <img
                className="w-full rounded-3xl"
                src={items.image}
                alt={items.name + "! Not Found"}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-4">{items.name}</div>
                <p className="text-gray-700 text-base">{items.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {items.hashtag.map((tags) => {
                  return (
                    <span
                      key={tags.id}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      {tags.tag}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
