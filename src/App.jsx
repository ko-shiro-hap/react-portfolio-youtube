import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <header className="text-gray-700 border-b border-gray-200">
        <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-4 md:mb-0">
            <span className="text-xl ml-3">KouCode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400 duration-300">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400 duration-300">
              About
            </a>
            <a href="#skills" className="mr-5 hover:text-blue-400 duration-300">
              Skills
            </a>
            <a href="#blog" className="mr-5 hover:text-blue-400 duration-300">
              Blog
            </a>
            <a href="#contact" className="hover:text-blue-400 duration-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hi!
              <br />
              I'm KouCode
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
              repudiandae possimus, minus provident totam neque delectus quasi
              cum unde quia!
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img
              src="./images/shivendu-shukla-ghcT2OfTHqc-unsplash.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="text-gray-700 border-t border-gray-200">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus culpa delectus eum et exercitationem in nihil quo.
              Culpa, provident repellendus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
              molestiae! Porro magnam fugiat aspernatur dolorum placeat eligendi
              maiores dolore atque itaque cum. Officiis sit aperiam minus autem
              sed ullam odio sequi delectus, molestiae iure laborum quia eveniet
              eligendi labore quaerat necessitatibus modi minima veritatis atque
              vitae! Illo delectus culpa error cumque totam ea nulla nobis
              similique cum in voluptatum tempora odit eos animi molestias quas
              expedita, consequatur quod. Quod minus temporibus praesentium,
              fugit, magni iusto voluptatum adipisci voluptatibus architecto
              nihil quia officia ipsam eum dicta eius nam pariatur at assumenda
              eligendi eos deleniti error. Voluptates saepe provident eum
              obcaecati eos.
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}

export default App;
