import "./Home.css";
import {
  AiFillHome,
  AiOutlineSearch,
  AiOutlineComment,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import {
  BiMoviePlay,
  BiMessageRoundedCheck,
  BiMessageRounded,
  BiSave,
  BiWinkSmile,
} from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { CgProfile, CgDetailsMore } from "react-icons/cg";
import { FiMoreHorizontal } from "react-icons/fi";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        borderTop: "1px solid grey",
      }}
    >
      <div className="home-middle-page">
        <div className="home-aside-container">
          <img style={{ width: "150px" }} src="./instagram-logo-name.png" />
          <div>
            <AiFillHome />
            <span>Home</span>
          </div>
          <div>
            <AiOutlineSearch />
            <span>Search</span>
          </div>
          <div>
            <MdExplore />
            <span>Explore</span>
          </div>
          <div>
            <BiMoviePlay />
            <span>Reels</span>
          </div>
          <div>
            <BiMessageRoundedCheck />
            <span>Messages</span>
          </div>
          <div>
            <AiOutlineHeart />
            <span>Notification</span>
          </div>
          <div>
            <IoIosCreate />
            <span>Create</span>
          </div>
          <div>
            <CgProfile />
            <span>Profile</span>
          </div>
          <div>
            <CgDetailsMore />
            <span>More</span>
          </div>
        </div>
        <div>
          <div className="home-story-arrangement">
            <div className="home-story-container">
              <img
                style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                src="./PAVAN.png"
              />
              <span>Pavan</span>
            </div>
            <div className="home-story-container">
              <img
                style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                src="./RAVI.png"
              />
              <span>Ravi</span>
            </div>
            <div className="home-story-container">
              <img
                style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                src="AKHIL.png"
              />
              <span>Akhil</span>
            </div>
            <div className="home-story-container">
              <img
                style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                src="./MANIKANTA.png"
              />
              <span>Mani</span>
            </div>
            <div className="home-story-container">
              <img
                style={{
                  width: "50px",
                  borderRadius: "50%",
                  height: "50px",
                  borderRadius: "50%",
                  height: "50px",
                }}
                src="./VAMSI.png"
              />
              <span>Vamshi</span>
            </div>
            <div className="home-story-container">
              <img
                style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                src="./RAKESH.png"
              />
              <span>Rakesh</span>
            </div>
            <div className="home-story-container">
              <img
                style={{ width: "50px", borderRadius: "50%", height: "50px" }}
                src="./SHAHENSHA.png"
              />
              <span>Sha</span>
            </div>
          </div>
          <div className="home-post-totaldiv">
            <div className="home-recent-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: "12px",
                }}
              >
                <img
                  style={{ width: "30px", borderRadius: "50%", height: "30px" }}
                  src="./BESTIEE_1.jpg"
                />
                <span style={{ fontSize: "16px", marginLeft: "12px" }}>
                  _Mr.Kolli_
                </span>
              </div>
              <div>
                <FiMoreHorizontal />
              </div>
            </div>
            <div style={{ width: "350px" }}>
              <img
                style={{
                  width: "100%",
                  height: "450px",
                  border: "1 px solid grey",
                  borderRadius: "3px",
                  margin: "5px",
                }}
                src="https://3.bp.blogspot.com/-AxxTfQ40SJU/WiYf-GgnlVI/AAAAAAAAAPQ/pm4J_BxmVJcAi_umk7bR4QtF5W5GWoTcQCLcBGAs/s1600/K_A_Paul.JPG"
              />
            </div>
            <div className="home-pic-downslide">
              <div>
                <AiOutlineHeart />
                <BiMessageRounded />
                <AiOutlineComment />
              </div>
              <div>
                <BiSave />
              </div>
            </div>
            <span>1M Likes</span>
            <span>
              @mr.k_o_l_l_i_ No matter what comes my way, I handle it with a
              smile 🙂❤️ ...{" "}
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <span>Add a comment...</span>
              <BiWinkSmile />
            </div>
            <hr />
          </div>
        </div>
        <div className="thirdpart-image-container">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "12px",
            }}
          >
            <img
              style={{ width: "30px", borderRadius: "50%", height: "30px" }}
              src="./BESTIEE_1.jpg"
            />
            <span style={{ marginLeft: "12px" }}>_Mr.Kolli_</span>
            <span
              style={{ fontSize: "12px", color: "blue", marginLeft: "12px" }}
            >
              Switch Account
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              textAlign: "center",
              marginTop: "10px",
              width: "70%",
            }}
          >
            <span>Suggested For You</span>
            <span style={{ fontSize: "10px" }}>See All</span>
          </div>
          <div className="fllowes-container">
            <div style={{ marginTop: "20px", gap: "2rem" }}>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "30px",
                      borderRadius: "50%",
                      height: "30px",
                      marginRight: "12px",
                    }}
                    src="./RAVI.png"
                  />
                  <span>Ravi</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span> Followed by Mani+1 more</span>
                  <span style={{ color: "blue", marginLeft: "12px" }}>
                    Follow
                  </span>
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "30px",
                      borderRadius: "50%",
                      height: "30px",
                      marginRight: "12px",
                    }}
                    src="./MANIKANTA.png"
                  />
                  <span>Manikanta</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span> Followed by Mani+1 more</span>
                  <span style={{ color: "blue", marginLeft: "12px" }}>
                    Follow
                  </span>
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "30px",
                      borderRadius: "50%",
                      height: "30px",
                      marginRight: "12px",
                    }}
                    src="./RAKESH.png"
                  />
                  <span>Rakesh</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span> Followed by Mani+1 more</span>
                  <span style={{ color: "blue", marginLeft: "12px" }}>
                    Follow
                  </span>
                </div>
              </div>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      width: "30px",
                      borderRadius: "50%",
                      height: "30px",
                      marginRight: "12px",
                    }}
                    src="./VAMSI.png"
                  />
                  <span>Vamshi</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span> Followed by Mani+1 more</span>
                  <span style={{ color: "blue", marginLeft: "12px" }}>
                    Follow
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
