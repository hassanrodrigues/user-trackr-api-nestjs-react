
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ItemLabel, Link, SubLink, SubLinkTooltip } from './styles';

import Tooltips from '../../Tooltips';
import { SvgIcon } from '@mui/material';
import { useState } from 'react';

import { useLocation } from 'react-router-dom';
import ChevronDown from '../../../assets/icons/ChevronDown';


function MenuItem({ items, open, styled_theme }: any) {
  const currentRoute = useLocation();

  const toggleSubmenu = (id: number) => {
    setOpenSubmenuIds((prevIds) =>
      prevIds.includes(id)
        ? prevIds.filter((submenuId) => submenuId !== id)
        : [...prevIds, id]
    );
  };

  const [openSubmenuIds, setOpenSubmenuIds] = useState<number[]>(() =>
    items.filter((item: any) => item.subitems).map((item: any) => item.id)
  );

  return items?.map(
    ({ path, label, icon, icon2, id, subitems }: any) =>
      !subitems ? (
        <Tooltips
          title={label}
          placement="right"
          isActiveHover={open}
          disableInteractive
          arrow
        >
          <Link
            to={path}
            open={open}
            styled_theme={styled_theme}
            active={currentRoute.pathname.replace('/', '') === path}
            onClick={() => setOpenSubmenuIds([])}
          >
            <SvgIcon>
              {currentRoute.pathname.replace('/', '') === path ? icon2 : icon}
            </SvgIcon>
            <ItemLabel
              open={open}
              className="itemLabel"
              active={currentRoute.pathname.replace('/', '') === path}
            >
              {label}
            </ItemLabel>
          </Link>
        </Tooltips>
      ) : (
        <Tooltips
          title={
            !open && (
              <div
                style={{
                  width: 273,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 6,

                }}
              >
                {subitems.map((subItem: any) => (
                  <SubLinkTooltip
                    to={subItem?.path}
                    open={true}
                    styled_theme={styled_theme}
                    active={
                      currentRoute.pathname.replace('/', '') === subItem?.path
                    }
                  >
                    <SvgIcon>
                      {currentRoute.pathname.replace('/', '') ===
                        subItem?.path
                        ? subItem?.icon2
                        : subItem?.icon}
                    </SvgIcon>
                    <ItemLabel
                      className="itemLabel"
                      open={open}
                      active={
                        currentRoute.pathname.replace('/', '') ===
                        subItem?.path
                      }
                    >
                      {subItem.label}
                    </ItemLabel>
                  </SubLinkTooltip>
                ))}
              </div>
            )
          }
          placement="right"
          isActiveHover={open}
          disableInteractive={false}
          noArrow
          color={'#0B2B25'}
        >
          <Link
            open={open}
            styled_theme={styled_theme}
            onClick={() => toggleSubmenu(id)}
          >
            <SvgIcon>{!openSubmenuIds.includes(id) ? icon : icon2}</SvgIcon>
            <ItemLabel open={open}>{label}</ItemLabel>
            {open && (
              <div style={{ width: '20%', position: 'absolute', right: 0 }}>
                {open && (
                  <SvgIcon>
                    {!openSubmenuIds.includes(id) && <ChevronDown />}
                  </SvgIcon>
                )}
              </div>
            )}
          </Link>
          {open &&
            openSubmenuIds.includes(id) &&
            subitems.map((subItem: any) => (
              <SubLink
                to={subItem?.path}
                open={open}
                styled_theme={styled_theme}
                active={
                  currentRoute.pathname.replace('/', '') === subItem?.path
                }
              >
                <SvgIcon>
                  {currentRoute.pathname.replace('/', '') === subItem?.path
                    ? subItem?.icon2
                    : subItem?.icon}
                </SvgIcon>
                <ItemLabel
                  className="itemLabel"
                  open={open}
                  active={
                    currentRoute.pathname.replace('/', '') === subItem?.path
                  }
                >
                  {subItem.label}
                </ItemLabel>
              </SubLink>
            ))}
        </Tooltips>
      )
  );
}

export default MenuItem;
