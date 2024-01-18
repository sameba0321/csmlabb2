import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function HeadersComponent() {
  const queryData = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          menuLinks {
            endpoint
            name
          }
        }
      }
    }
  `);

  const links = queryData.site.siteMetadata.menuLinks;
  return (
    <>
      <header>
        <ul className="flex gap-4 bg-gray-400 p-5">
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  activeStyle={{
                    color: "white",
                  }}
                  to={link.endpoint}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
}
