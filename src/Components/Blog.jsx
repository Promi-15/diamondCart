const Blog = () => {
  return (
    //     <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
    //   <img
    //     alt=""
    //     src="/public/img10.jpg"
    //     className="h-56 w-full object-cover"
    //   />

    //   <div className="bg-white p-4 sm:p-6">
    //     <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

    //     <a href="#">
    //       <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
    //     </a>

    //     <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
    //       pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
    //       mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
    //       dignissimos. Molestias explicabo corporis voluptatem?
    //     </p>
    //   </div>
    // </article>
      <div className="max-w-7xl mx-auto mt-10">
          <div>
              <h1 className="text-4xl font-bold">Our Blogs</h1>
          </div>
           <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto mt-10">
          
          <div className="flex flex-col items-center overflow-hidden rounded-lg shadow transition hover:shadow-lg  border-2 p-2">
                  <img src="/public/img11.jpg" className=" h-52 w-full object-cover rounded-lg " alt="" />
                
            <p className="mt-2  p-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium
              dolore sed nulla ipsum eveniet 
            </p>
          </div>
          <div className="flex flex-col items-center overflow-hidden rounded-lg shadow transition hover:shadow-lg  border-2 p-2">
                  <img src="/public/crown3.jpg" className=" h-52 w-full object-cover rounded-lg " alt="" />
                
            <p className="mt-2  p-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium
              dolore sed nulla ipsum eveniet 
            </p>
              </div>
              <div className="flex flex-col items-center overflow-hidden rounded-lg shadow transition hover:shadow-lg  border-2 p-2">
                  <img src="/public/ring1.png" className=" h-52 w-full object-cover rounded-lg " alt="" />
                
            <p className="mt-2  p-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium
              dolore sed nulla ipsum eveniet 
            </p>
              </div>
              <div className="flex flex-col items-center overflow-hidden rounded-lg shadow transition hover:shadow-lg  border-2 p-2">
                  <img src="/public/img14.jpg" className=" h-52 w-full object-cover rounded-lg " alt="" />
                
            <p className="mt-2  p-2 text-sm text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium
              dolore sed nulla ipsum eveniet 
            </p>
              </div>
              
        </div>
     </div>
  );
};

export default Blog;
