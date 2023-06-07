import React from "react";

function About() {
  return (
    <div className="about-container">
      <div className="about-column flex-container">
        <h2>About Bun Drop!</h2>
        <em className="about-text">
          Welcome to Bundrop, the future of burger delivery! We are
          revolutionizing the way you experience food by bringing your favorite
          burgers straight to your doorstep, delivered with the speed and
          precision of drones.
        </em>
        <br />
        <em className="about-text">
          Imagine the convenience of ordering a mouthwatering burger from the
          comfort of your home or office and having it swiftly delivered to you
          by an airborne companion. Our cutting-edge technology and dedicated
          team ensure that your burgers are delivered fresh, hot, and with a
          touch of futuristic flair.!
        </em>
        <br />
        <em className="about-text">
          How does it work? It's simple! Just visit our user-friendly website or
          download our Bundrop app, and with a few taps, you can explore our
          delicious burger menu. From classic cheeseburgers to gourmet
          creations, we offer an array of options to satisfy every craving.
        </em>
        <br />
        <em className="about-text">
          Once you've made your selection, our advanced drone fleet takes over.
          Our specially designed drones are equipped with state-of-the-art
          navigation systems, ensuring efficient and safe delivery. Your order
          is carefully packaged, secured, and loaded onto a drone, ready to take
          flight.
        </em>
        <br />
        <em className="about-text">
          Watch in awe as your burger soars through the sky, avoiding traffic
          and bypassing obstacles to reach you in record time. Our drones are
          operated by skilled pilots who adhere to strict safety protocols,
          ensuring a seamless and secure delivery experience.
        </em>
        <br />
        <em className="about-text">
          At Bundrop, we prioritize quality and flavor. Our burgers are prepared
          by expert chefs using only the freshest ingredients, guaranteeing an
          unforgettable culinary experience.Each bite is a testament to our
          commitment to excellence and your satisfaction.
        </em>
        <br />
        <em className="about-text">
          Not only do we prioritize convenience and taste, but we also
          prioritize the environment. By utilizing drones for delivery, we
          significantly reduce our carbon footprint, contributing to a greener
          and more sustainable future.
        </em>
        <br />
        <em className="about-text">
          So, sit back, relax, and let Bundrop take your burger cravings to new
          heights. Experience the thrill of receiving your favorite meal from
          above, delivered with unparalleled speed and precision. With Bundrop,
          the future of burger delivery is here!
        </em>
      </div>
      <img className="about-image" src="/images/hamburger.png" alt="" />
    </div>
  );
}

export default About;
