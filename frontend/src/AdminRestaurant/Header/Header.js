import React, { useEffect, useState } from 'react';
import { useAdminResContext } from '../context/useAdminResContext';

function Header(props) {

    const [isVisibale, setIsVisible] = useState(false);


    function handleOnClickVisible() {
        setIsVisible(!isVisibale);
    }

    const {
        updateTitleContent,
    } = useAdminResContext();

    function handleOnClickProfile(title) {
        updateTitleContent(title);
    }

    function handleLogout() {
        window.location.href = 'adminres-login';
        localStorage.clear();
    }

    return (
        <header className="MuiPaper-root MuiPaper-elevation4 MuiAppBar-root MuiAppBar-relative makeStyles-appBar-125 MuiAppBar-colorPrimary mui-fixed">
            <div className="MuiToolbar-root MuiToolbar-regular makeStyles-container-126 MuiToolbar-gutters">
                <div className="makeStyles-flex-127">
                    <a className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-transparent-157 makeStyles-title-128 MuiButton-text" tabIndex={0} aria-disabled="false">
                        <span className="MuiButton-label">{props.title}</span>
                    </a>
                </div>
                <div className="PrivateHiddenCss-smDown-34">
                    <div className="makeStyles-manager-195">
                        <button className="MuiButtonBase-root MuiButton-root makeStyles-button-148 makeStyles-transparent-157 makeStyles-justIcon-164 makeStyles-buttonLink-182 MuiButton-text"
                            tabIndex={0} onClick={handleOnClickVisible} onBlur={() => setIsVisible(false)} type="button" aria-haspopup="true">
                            <span className="MuiButton-label">
                                <svg className="MuiSvgIcon-root"
                                    focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
                                    <path
                                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                                    </path>
                                </svg>
                                <div className="PrivateHiddenCss-mdUp-36">
                                    <p className="makeStyles-linkText-184">Profile</p>
                                </div>
                            </span>
                            <span className="MuiTouchRipple-root" />
                        </button>
                        <div role="tooltip" className={"makeStyles-popperNav-187 " + (!isVisibale ? 'hidden' : '')} style={{ position: 'absolute', right: "10px", zIndex: 10000 }} x-placement="bottom">
                            <div className="MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded" id="profile-menu-list-grow" style={{ opacity: 1, transform: 'none', transformOrigin: 'center top', transition: 'opacity 254ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 169ms cubic-bezier(0.4, 0, 0.2, 1) 0ms' }}>
                                <ul className="MuiList-root MuiList-padding" role="menu" tabIndex={-1}>
                                    <li className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root makeStyles-dropdownItem-189 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabIndex={-1} onClick={() => handleOnClickProfile('Edit Profile')} role="menuitem" aria-disabled="false">Profile<span className="MuiTouchRipple-root" /></li>
                                    <hr className="MuiDivider-root MuiDivider-light"></hr>
                                    <li onClick={handleLogout} className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root makeStyles-dropdownItem-189 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabIndex={-1} role="menuitem" aria-disabled="false">Logout<span className="MuiTouchRipple-root" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
