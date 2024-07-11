import { useUser } from "pages/auth/ui/api/hooks/useUser";
import { FC, useContext } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getUserFn, loginUserFn } from "shared/api/auth/authApi";
import { CurrentUser } from "shared/api/currentUser";
import { User } from "shared/api/models";
import { QUERY_KEY } from "shared/constants/queryKeys";
import { useUserStore } from "shared/store/user";

export const Header: FC = () => {
  const currentUser = useUserStore().authUser;
  console.log(currentUser);

  return (
    <nav className="navbar navbar-light">
      {/* <div className="container">
      <Link className="navbar-brand" to="/" prefetch="intent">
        conduit
      </Link>
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link
            prefetch="intent"
            className={`nav-link ${pathname == "/" ? "active" : ""}`}
            to="/"
          >
            Home
          </Link>
        </li>
        {currentUser == null ? (
          <>
            <li className="nav-item">
              <Link
                prefetch="intent"
                className={`nav-link ${pathname == "/login" ? "active" : ""}`}
                to="/login"
              >
                Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link
                prefetch="intent"
                className={`nav-link ${pathname == "/register" ? "active" : ""}`}
                to="/register"
              >
                Sign up
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link
                prefetch="intent"
                className={`nav-link ${pathname == "/editor" ? "active" : ""}`}
                to="/editor"
              >
                <i className="ion-compose"></i>&nbsp;New Article{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link
                prefetch="intent"
                className={`nav-link ${pathname == "/settings" ? "active" : ""}`}
                to="/settings"
              >
                {" "}
                <i className="ion-gear-a"></i>&nbsp;Settings{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                prefetch="intent"
                className={`nav-link ${pathname.includes("/profile") ? "active" : ""}`}
                to={`/profile/${currentUser.username}`}
              >
                {currentUser.image && (
                  <img
                    width={25}
                    height={25}
                    src={currentUser.image}
                    className="user-pic"
                    alt=""
                  />
                )}
                {currentUser.username}
              </Link>
            </li>
          </>
        )}
      </ul>
    </div> */}
    </nav>
  );
};
