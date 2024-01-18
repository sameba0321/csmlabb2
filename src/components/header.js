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
<ul>
          {links.map((link, index) => {
            return (
              <li key={index}>
                <Link to={link.endpoint}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
</header>
</>
  );
}