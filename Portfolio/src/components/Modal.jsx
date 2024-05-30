import { React, useEffect } from "react";
// import { ReactLenis, useLenis } from "lenis/react";

function Modal() {
  useEffect(() => {
    const modalScrollContainer = document.querySelector(".modal-container");
    const modalPaddingContainer = document.querySelector(".modal-container");
    const modalMarginContainer = document.querySelector(".modal-inner");
    const modalBackground = document.querySelector(".modal-content-background");

    modalScrollContainer.addEventListener("scroll", (e) => {
      console.log(e.target.scrollTop);

      if (e.target.scrollTop > 20 && e.target.scrollTop < 30) {
        modalBackground.style.borderTopLeftRadius = "2rem";
        modalBackground.style.borderTopRightRadius = "2rem";
        modalPaddingContainer.style.padding = "0 0.5rem";
        modalMarginContainer.style.transform = "translateY(-3rem)";
      } else if (e.target.scrollTop > 50) {
        modalBackground.style.borderTopLeftRadius = "0";
        modalBackground.style.borderTopRightRadius = "0";
        modalPaddingContainer.style.padding = "0";
        modalMarginContainer.style.transform = "translateY(-20rem)";
      }
    });
  }, []);

  return (
    <>
      <div className="modal-scrollable-wrapper-container">
        <div className="modal-container">
          <div className="modal-content-container lenis-content">
            <div className="modal-inner">
              <div className="modal-content-background"></div>
              <button>X</button>
              <div className="main-modal-content">
                <div className="left-text-information-container">
                  <div className="top-section">
                    <h2>Gauteaux Bakery</h2>
                    <a href="#" className="website-btn btn">
                      Website
                    </a>
                  </div>
                  <div className="modal-content">
                    <p className="modal-text-standout">
                      Gateaux Bakery" is a comprehensive web solution designed
                      to sweeten the online presence of a local bakery business.
                      This project involved creating an intuitive and visually
                      appealing website, complete with a robust backend for
                      inventory management.
                    </p>
                    <p>
                      The client, a local bakery, needed a digital platform to
                      showcase their delicious products and manage their
                      inventory effectively. They wanted a solution that was as
                      delightful and user-friendly as the pastries they bake
                      every day.
                    </p>
                    <p>
                      We designed a website that not only showcases the bakery's
                      products in an appetizing way but also allows the client
                      to easily update their inventory as needed. The website
                      features high-quality images of the bakery's offerings,
                      detailed product descriptions, and an easy-to-navigate
                      layout.
                    </p>
                    <p>
                      The website was built using modern web development
                      technologies. The frontend was designed with a focus on
                      UI/UX, ensuring a seamless and enjoyable experience for
                      visitors. The backend was developed to provide the client
                      with an easy-to-use interface for managing inventory.
                    </p>
                  </div>
                  <div className="modal-technologies-summary"></div>
                </div>
                <div className="right-bento-grid-container">
                  <img src="/img/cafe.jpg" alt="" />
                  <img src="/img/artwork.png" alt="" />
                  <img src="/img/ndis.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
