import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const footerLinks = [
  {
    title: "About",
    links: [
      { name: "Contact Us", redirect: "contact" },
      { name: "About Us", redirect: "about" },
      { name: "Careers", redirect: "careers" },
      { name: "Return Policy", redirect: "returnpolicy" },
      { name: "Terms Of Use", redirect: "term&conditios" },
    ]
  },
  {
    title: "Social",
    links: [
      { name: "Facebook", redirect: "https://www.facebook.com/share/15NVZUbLCd/" },
      { name: "Instagram", redirect: "https://www.instagram.com/siddhi_creatives/profilecard/?igsh=MXh3eGxld21lbXF2ZA==" }
    ]
  }
];

const Footer = () => {
  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"));
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <footer className="mt-20 w-full py-6 px-4 sm:px-12 bg-primary-darkBlue text-white text-sm border-t border-gray-600">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8">
            
            {/* About Section */}
            <div>
              <h2 className="text-primary-grey mb-4 font-semibold uppercase">About</h2>
              {footerLinks[0].links.map((link, index) => (
                <Link
                  to={link.redirect}
                  key={index}
                  className="block hover:text-primary-blue transition duration-200 mb-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Social Section */}
            <div>
              <h2 className="text-primary-grey mb-4 font-semibold uppercase">Social</h2>
              {footerLinks[1].links.map((link, index) => (
                <Link
                  to={link.redirect}
                  key={index}
                  className="block hover:text-primary-blue transition duration-200 mb-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mail Us Section */}
            <div>
              <h2 className="text-primary-grey mb-4 font-semibold uppercase">Mail Us:</h2>
              <p className="leading-6">
                Siddhi Creatives Private Limited,<br />
                support@siddhicreatives.com
              </p>
            </div>

            {/* Registered Office Section */}
            <div>
              <h2 className="text-primary-grey mb-4 font-semibold uppercase">Registered Office Address:</h2>
              <p className="leading-6">
                Siddhi Creatives Private Limited,<br />
                22 Dukan Govindpura Sanganer,<br />
                Jaipur, 302029,<br />
                Rajasthan, India<br />
                
                Telephone: +919057810542, 9610062609
               
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
