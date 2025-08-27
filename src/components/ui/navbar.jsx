import React from "react";

function Navbar() {
  return (
    <section id="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-xl p-sm-2 p-lg-0">
          <a className="d-flex logo  space_2" href="index.html">
            <b className="fs-2 family_1 text-white">
              Ogoni<span className="col_orange">Beats</span>{" "}
            </b>
          </a>
          <button
            className="navbar-toggler offcanvas-nav-btn  ms-auto me-3"
            type="button">
            <img
              src="src/image/icons-svg/list.svg"
              width="40"
              height="40"
              alt="Open TemplateOnweb website menu"
            />
          </button>
          <div
            className="offcanvas offcanvas-start offcanvas-nav"
            style={{ width: "25rem" }}>
            <div className="offcanvas-header shadow  p-sm-2 p-lg-0">
              <a className="d-flex logo  space_2" href="index.html">
                <b className="fs-2 family_1 text-white">
                  <i className="bi-file-music me-1 col_orange align-middle"></i>{" "}
                  Ogoni<span className="col_orange">Beats</span>{" "}
                </b>
              </a>
              <img
                src="src/image/icons-svg/x.svg"
                width="40"
                height="40"
                className="ms-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                alt="Close TemplateOnweb website menu"
              />
            </div>
            <div className="offcanvas-body p-sm-4 p-lg-0 align-items-center">
              <ul className="navbar-nav align-items-lg-center ms-auto">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="index.html"
                    title="Visit home page">
                    Home
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="musics.html"
                    title="Visit home page">
                    Musics
                  </a>
                </li>
                <li className="nav-item dropdown drop_border">
                  <a className="nav-link " href="team.html" role="button">
                    Artists
                  </a>
                </li>

                <li className="nav-item dropdown dropdown-fullwidth">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    title="Click to see Wordpress website templates">
                    Releases
                    <img
                      src="src/image/icons-svg/chevron-down.svg"
                      width="15"
                      height="15"
                    />{" "}
                  </a>
                  <div className="dropdown-menu p-4 shadow">
                    <div className="row row-cols-xl-5 row-cols-lg-5 row-cols-1 gx-lg-4">
                      <div className="col">
                        <a
                          className="dropdown-item d-block px-0 pt-0"
                          href="release.html">
                          <div className="rounded d-none d-lg-block">
                            <img
                              src="src/image/25.jpg"
                              className="img-fluid"
                              alt="abs"
                            />
                            <h5 className="font_14">
                              <a href="release.html">
                                Sustainable Fashion Revolution: The Impact of
                                Gen AI
                              </a>
                            </h5>
                            <span className="d-block font_12 text-muted">
                              JAN 6, 2020
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <a
                          className="dropdown-item d-block px-0 pt-0"
                          href="release.html">
                          <div className="rounded d-none d-lg-block">
                            <img
                              src="src/image/26.jpg"
                              className="img-fluid"
                              alt="abs"
                            />
                            <h5 className="font_14">
                              <a href="release.html">
                                14 Best Travel Size Perfumes to Ensure You Smell
                                Heavenly on the Go
                              </a>
                            </h5>
                            <span className="d-block font_12 text-muted">
                              JAN 6, 2020
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <a
                          className="dropdown-item d-block px-0 pt-0"
                          href="release.html">
                          <div className="rounded d-none d-lg-block">
                            <img
                              src="src/image/27.jpg"
                              className="img-fluid"
                              alt="abs"
                            />
                            <h5 className="font_14">
                              <a href="release.html">
                                How To Start A Clothing Business: Everything You
                                Need To Know
                              </a>
                            </h5>
                            <span className="d-block font_12 text-muted">
                              JAN 6, 2020
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <a
                          className="dropdown-item d-block px-0 pt-0"
                          href="release.html">
                          <div className="rounded d-none d-lg-block">
                            <img
                              src="src/image/28.jpg"
                              className="img-fluid"
                              alt="abs"
                            />
                            <h5 className="font_14">
                              <a href="release.html">
                                7 New York Fashion Week Top Makeup Trends We
                                Spotted
                              </a>
                            </h5>
                            <span className="d-block font_12 text-muted">
                              JAN 6, 2020
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="col">
                        <a
                          className="dropdown-item d-block px-0 pt-0"
                          href="release.html">
                          <div className="rounded d-none d-lg-block">
                            <img
                              src="src/image/29.jpg"
                              className="img-fluid"
                              alt="abs"
                            />
                            <h5 className="font_14">
                              <a href="release.html">
                                The Curly Bob Is the Coolest Haircut for
                                Seamless Volume and Bouncy Texture
                              </a>
                            </h5>
                            <span className="d-block font_12 text-muted">
                              JAN 6, 2020
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown drop_border">
                  <a className="nav-link " href="event.html" role="button">
                    Events
                  </a>
                </li>

                <li className="nav-item dropdown drop_border">
                  <a className="nav-link active" href="blog.html" role="button">
                    Blogs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
