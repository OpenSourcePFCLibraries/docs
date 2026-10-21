# n_cst_platformattrib

> Not covered in the original (PowerBuilder 9) edition of this reference. This page was generated from the PFC source code comments.

**Description**

Extension About window attributes.

**Ancestry**

`nonvisualobject → pfc_n_base → n_base → pfc_n_cst_baseattrib → n_cst_baseattrib → pfc_n_cst_platformattrib → n_cst_platformattrib`

**Library**

- PFCAPSRV.PBL
- PFEAPSRV.PBL

## Instance variables

N_cst_platformattrib includes instance variables:

| Instance variable | Description | Data type | Access |
| --- | --- | --- | --- |
| COLOR_3DDKSHADOW | Dark shadow for three-dimensional display elements. | Integer | Public |
| COLOR_3DFACE | Constant set to COLOR_BTNFACE | Integer | Public |
| COLOR_3DHIGHLIGHT | Constant set to COLOR_BTNHIGHLIGHT | Integer | Public |
| COLOR_3DHILIGHT | Constant set to COLOR_BTNHIGHLIGHT | Integer | Public |
| COLOR_3DLIGHT | Light color for three-dimensional display elements (for edges facing the light source.) | Integer | Public |
| COLOR_3DSHADOW | Constant set to COLOR_BTNSHADOW | Integer | Public |
| COLOR_ACTIVEBORDER | Active window border. | Integer | Public |
| COLOR_ACTIVECAPTION | Active window title bar.  Specifies the left side color in the color gradient of an active window's title bar if the gradient effect is enabled. | Integer | Public |
| COLOR_ALTERNATEBTNFACE | Undocumented, constant's name unknown. | Integer | Public |
| COLOR_APPWORKSPACE | Background color of multiple document interface (MDI) applications. | Integer | Public |
| COLOR_BACKGROUND | Desktop. | Integer | Public |
| COLOR_BTNFACE | Face color for three-dimensional display elements and for dialog box backgrounds. | Integer | Public |
| COLOR_BTNHIGHLIGHT | Highlight color for three-dimensional display elements (for edges facing the light source.) | Integer | Public |
| COLOR_BTNHILIGHT | Constant set to COLOR_BTNHIGHLIGHT | Integer | Public |
| COLOR_BTNSHADOW | Shadow color for three-dimensional display elements (for edges facing away from the light source). | Integer | Public |
| COLOR_BTNTEXT | Text on push buttons. | Integer | Public |
| COLOR_CAPTIONTEXT | Text in caption, size box, and scroll bar arrow box. | Integer | Public |
| COLOR_DESKTOP | Constant set to COLOR_BACKGROUND | Integer | Public |
| COLOR_GRADIENTACTIVECAPTION | Right side color in the color gradient of an active window's title bar. COLOR_ACTIVECAPTION specifies the left side color. Use SPI_GETGRADIENTCAPTIONS with the SystemParametersInfo function to determine whether the gradient effect is enabled. | Integer | Public |
| COLOR_GRADIENTINACTIVECAPTION | Right side color in the color gradient of an inactive window's title bar. COLOR_INACTIVECAPTION specifies the left side color. | Integer | Public |
| COLOR_GRAYTEXT | Grayed (disabled) text. This color is set to 0 if the current display driver does not support a solid gray color. | Integer | Public |
| COLOR_HIGHLIGHT | Item(s) selected in a control. | Integer | Public |
| COLOR_HIGHLIGHTTEXT | Text of item(s) selected in a control. | Integer | Public |
| COLOR_HOTLIGHT | Color for a hyperlink or hot-tracked item. | Integer | Public |
| COLOR_INACTIVEBORDER | Inactive window border. | Integer | Public |
| COLOR_INACTIVECAPTION | Inactive window caption.  Specifies the left side color in the color gradient of an inactive window's title bar if the gradient effect is enabled. | Integer | Public |
| COLOR_INACTIVECAPTIONTEXT | Color of text in an inactive caption. | Integer | Public |
| COLOR_INFOBK | Background color for tooltip controls. | Integer | Public |
| COLOR_INFOTEXT | Text color for tooltip controls. | Integer | Public |
| COLOR_MAX | Constant set to 28 | Integer | Public |
| COLOR_MENU | Menu background. | Integer | Public |
| COLOR_MENUBAR | The background color for the menu bar when menus appear as flat menus (see SystemParametersInfo). However, COLOR_MENU continues to specify the background color of the menu popup.  Windows 2000:  This value is not supported. | Integer | Public |
| COLOR_MENUHILIGHT | The color used to highlight menu items when the menu appears as a flat menu (see SystemParametersInfo). The highlighted menu item is outlined with COLOR_HIGHLIGHT.  Windows 2000:  This value is not supported. | Integer | Public |
| COLOR_MENUTEXT | Text in menus. | Integer | Public |
| COLOR_MIN | Constant set to 0 | Integer | Public |
| COLOR_SCROLLBAR | Scroll bar gray area. | Integer | Public |
| COLOR_WINDOW | Window background. | Integer | Public |
| COLOR_WINDOWFRAME | Window frame. | Integer | Public |
| COLOR_WINDOWTEXT | Text in windows. | Integer | Public |
| GWL_EXSTYLE | Sets a new extended window style. | Integer | Public |
| GWL_HINSTANCE | Sets a new application instance handle. | Integer | Public |
| GWL_HWNDPARENT | Retrieves a handle to the parent window, if any. | Integer | Public |
| GWL_ID | Sets a new identifier of the child window.  The window cannot be a top-level window. | Integer | Public |
| GWL_STYLE | Sets a new window style. | Integer | Public |
| GWL_USERDATA | Sets the user data associated with the window.  This data is intended for use by the application that created the window.  Its value is initially zero. | Integer | Public |
| GWL_WNDPROC | Sets a new address for the window procedure.  You cannot change this attribute if the window does not belong to the same process as the calling thread. | Integer | Public |
| LOGPIXELSX | Constant set to 88 | Integer | Public |
| LOGPIXELSY | Constant set to 90 | Integer | Public |
| MF_BITMAP | Uses a bitmap as the menu item.  The lpNewItem parameter contains a handle to the bitmap. | Integer | Public |
| MF_BYCOMMAND | Indicates that the uPosition parameter gives the identifier of the menu item.  The MF_BYCOMMAND flag is the default if neither the MF_BYCOMMAND nor MF_BYPOSITION flag is specified. | Integer | Public |
| MF_BYPOSITION | Indicates that the uPosition parameter gives the zero-based relative position of the new menu item.  If uPosition is -1, the new menu item is appended to the end of the menu. | Integer | Public |
| MF_CHECKED | Places a check mark next to the menu item.  If the application provides check-mark bitmaps (see SetMenuItemBitmaps), this flag displays the check-mark bitmap next to the menu item. | Integer | Public |
| MF_DISABLED | Disables the menu item so that it cannot be selected, but does not gray it. | Integer | Public |
| MF_ENABLED | Enables the menu item so that it can be selected and restores it from its grayed state. | Integer | Public |
| MF_GRAYED | Disables the menu item and grays it so it cannot be selected. | Integer | Public |
| MF_MENUBARBREAK | Functions the same as the MF_MENUBREAK flag for a menu bar.  For a drop-down menu, submenu, or shortcut menu, the new column is separated from the old column by a vertical line. | Integer | Public |
| MF_MENUBREAK | Places the item on a new line (for menu bars) or in a new column (for a drop-down menu, submenu, or shortcut menu) without separating columns. | Integer | Public |
| MF_OWNERDRAW | Specifies that the item is an owner-drawn item.  Before the menu is displayed for the first time, the window that owns the menu receives a WM_MEASUREITEM message to retrieve the width and height of the menu item.  The WM_DRAWITEM message is then sent to the window procedure of the owner window whenever the appearance of the menu item must be updated. | Integer | Public |
| MF_POPUP | Specifies that the menu item opens a drop-down menu or submenu.  The uIDNewItem parameter specifies a handle to the drop-down menu or submenu.  This flag is used to add a menu name to a menu bar or a menu item that opens a submenu to a drop-down menu, submenu, or shortcut menu. | Integer | Public |
| MF_SEPARATOR | Draws a horizontal dividing line.  This flag is used only in a drop-down menu, submenu, or shortcut menu. The line cannot be grayed, disabled, or highlighted.  The lpNewItem and uIDNewItem parameters are ignored. | Integer | Public |
| MF_STRING | Specifies that the menu item is a text string; the lpNewItem parameter is a pointer to the string. | Integer | Public |
| MF_SYSMENU | A system menu. | Integer | Public |
| MF_UNCHECKED | Does not place a check mark next to the menu item (default).  If the application supplies check-mark bitmaps (see the SetMenuItemBitmaps function), this flag displays the clear bitmap next to the menu item. | Integer | Public |
| SC_CLOSE | Closes the window. | UnsignedLong | Public |
| SC_CONTEXTHELP | Changes the cursor to a question mark with a pointer.  If the user then clicks a control in the dialog box, the control receives a WM_HELP message. | UnsignedLong | Public |
| SC_DEFAULT | Selects the default item; the user double-clicked the window menu. | UnsignedLong | Public |
| SC_HOTKEY | Activates the window associated with the application-specified hot key.  The lParam parameter identifies the window to activate. | UnsignedLong | Public |
| SC_HSCROLL | Scrolls horizontally. | UnsignedLong | Public |
| SC_KEYMENU | Retrieves the window menu as a result of a keystroke. For more information, see the Remarks section. | UnsignedLong | Public |
| SC_MAXIMIZE | Maximizes the window. | UnsignedLong | Public |
| SC_MINIMIZE | Minimizes the window. | UnsignedLong | Public |
| SC_MONITORPOWER | Sets the state of the display.  This command supports devices that have power-saving features, such as a battery-powered personal computer. | UnsignedLong | Public |
| SC_MOUSEMENU | Retrieves the window menu as a result of a mouse click. | UnsignedLong | Public |
| SC_MOVE | Moves the window. | UnsignedLong | Public |
| SC_NEXTWINDOW | Moves to the next window. | UnsignedLong | Public |
| SC_PREVWINDOW | Moves to the previous window. | UnsignedLong | Public |
| SC_RESTORE | Restores the window to its normal position and size. | UnsignedLong | Public |
| SC_SCREENSAVE | Executes the screen saver application specified in the [boot] section of the System.ini file. | UnsignedLong | Public |
| SC_SIZE | Sizes the window. | UnsignedLong | Public |
| SC_TASKLIST | Activates the Start menu. | UnsignedLong | Public |
| SC_VSCROLL | Scrolls vertically. | UnsignedLong | Public |
| SCF_ISSECURE | Indicates whether the screen saver is secure. | UnsignedLong | Public |
| SM_CLEANBOOT | The value that specifies how the system is started:  0 Normal boot, 1 Fail-safe boot, 2 Fail-safe with network boot.  A fail-safe boot (also called SafeBoot, Safe Mode, or Clean Boot) bypasses the user startup files. | Integer | Public |
| SM_CMONITORS | The number of display monitors on a desktop.  For more information, see the Remarks section in this topic. | Integer | Public |
| SM_CMOUSEBUTTONS | The number of buttons on a mouse, or zero if no mouse is installed. | Integer | Public |
| SM_CONVERTIBLESLATEMODE | Reflects the state of the laptop or slate mode, 0 for Slate Mode and non-zero otherwise.  When this system metric changes, the system sends a broadcast message via WM_SETTINGCHANGE with "ConvertibleSlateMode" in the LPARAM. | Integer | Public |
| SM_CXBORDER | The width of a window border, in pixels.  This is equivalent to the SM_CXEDGE value for windows with the 3-D look. | Integer | Public |
| SM_CXCURSOR | The width of a cursor, in pixels.  The system cannot create cursors of other sizes. | Integer | Public |
| SM_CXDLGFRAME | This value is the same as SM_CXFIXEDFRAME. | Integer | Public |
| SM_CXDOUBLECLK | The width of the rectangle around the location of a first click in a double-click sequence, in pixels.  The second click must occur within the rectangle that is defined by SM_CXDOUBLECLK and SM_CYDOUBLECLK for the system to consider the two clicks a double-click.  The two clicks must also occur within a specified time.  To set the width of the double-click rectangle, call SystemParametersInfo with SPI_SETDOUBLECLKWIDTH. | Integer | Public |
| SM_CXDRAG | The number of pixels on either side of a mouse-down point that the mouse pointer can move before a drag operation begins.  This allows the user to click and release the mouse button easily without unintentionally starting a drag operation.  If this value is negative, it is subtracted from the left of the mouse-down point and added to the right of it. | Integer | Public |
| SM_CXEDGE | The width of a 3-D border, in pixels.  This metric is the 3-D counterpart of SM_CXBORDER. | Integer | Public |
| SM_CXFIXEDFRAME | The thickness of the frame around the perimeter of a window that has a caption but is not sizable, in pixels.  SM_CXFIXEDFRAME is the height of the horizontal border, and SM_CYFIXEDFRAME is the width of the vertical border.  This value is the same as SM_CXDLGFRAME. | Integer | Public |
| SM_CXFOCUSBORDER | The width of the left and right edges of the focus rectangle that the DrawFocusRect draws.  This value is in pixels.  Windows 2000:  This value is not supported. | Integer | Public |
| SM_CXFRAME | This value is the same as SM_CXSIZEFRAME. | Integer | Public |
| SM_CXFULLSCREEN | The width of the client area for a full-screen window on the primary display monitor, in pixels.  To get the coordinates of the portion of the screen that is not obscured by the system taskbar or by application desktop toolbars, call the SystemParametersInfo function with the SPI_GETWORKAREA value. | Integer | Public |
| SM_CXHSCROLL | The width of the arrow bitmap on a horizontal scroll bar, in pixels. | Integer | Public |
| SM_CXHTHUMB | The width of the thumb box in a horizontal scroll bar, in pixels. | Integer | Public |
| SM_CXICON | The default width of an icon, in pixels.  The LoadIcon function can load only icons with the dimensions that SM_CXICON and SM_CYICON specifies. | Integer | Public |
| SM_CXICONSPACING | The width of a grid cell for items in large icon view, in pixels.  Each item fits into a rectangle of size SM_CXICONSPACING by SM_CYICONSPACING when arranged.  This value is always greater than or equal to SM_CXICON. | Integer | Public |
| SM_CXMAXIMIZED | The default width, in pixels, of a maximized top-level window on the primary display monitor. | Integer | Public |
| SM_CXMAXTRACK | The default maximum width of a window that has a caption and sizing borders, in pixels.  This metric refers to the entire desktop.  The user cannot drag the window frame to a size larger than these dimensions.  A window can override this value by processing the WM_GETMINMAXINFO message. | Integer | Public |
| SM_CXMENUCHECK | The width of the default menu check-mark bitmap, in pixels. | Integer | Public |
| SM_CXMENUSIZE | The width of menu bar buttons, such as the child window close button that is used in the multiple document interface, in pixels. | Integer | Public |
| SM_CXMIN | The minimum width of a window, in pixels. | Integer | Public |
| SM_CXMINIMIZED | The width of a minimized window, in pixels. | Integer | Public |
| SM_CXMINSPACING | The width of a grid cell for a minimized window, in pixels.  Each minimized window fits into a rectangle this size when arranged.  This value is always greater than or equal to SM_CXMINIMIZED. | Integer | Public |
| SM_CXMINTRACK | The minimum tracking width of a window, in pixels.  The user cannot drag the window frame to a size smaller than these dimensions.  A window can override this value by processing the WM_GETMINMAXINFO message. | Integer | Public |
| SM_CXPADDEDBORDER | The amount of border padding for captioned windows, in pixels.  Windows XP/2000:  This value is not supported. | Integer | Public |
| SM_CXSCREEN | The width of the screen of the primary display monitor, in pixels.  This is the same value obtained by calling GetDeviceCaps as follows:  GetDeviceCaps(hdcPrimaryMonitor, HORZRES). | Integer | Public |
| SM_CXSIZE | The width of a button in a window caption or title bar, in pixels. | Integer | Public |
| SM_CXSIZEFRAME | The thickness of the sizing border around the perimeter of a window that can be resized, in pixels.  SM_CXSIZEFRAME is the width of the horizontal border, and SM_CYSIZEFRAME is the height of the vertical border.  This value is the same as SM_CXFRAME. | Integer | Public |
| SM_CXSMICON | The recommended width of a small icon, in pixels.  Small icons typically appear in window captions and in small icon view. | Integer | Public |
| SM_CXSMSIZE | The width of small caption buttons, in pixels. | Integer | Public |
| SM_CXVIRTUALSCREEN | The width of the virtual screen, in pixels.  The virtual screen is the bounding rectangle of all display monitors.  The SM_XVIRTUALSCREEN metric is the coordinates for the left side of the virtual screen. | Integer | Public |
| SM_CXVSCROLL | The width of a vertical scroll bar, in pixels. | Integer | Public |
| SM_CYBORDER | The height of a window border, in pixels.  This is equivalent to the SM_CYEDGE value for windows with the 3-D look. | Integer | Public |
| SM_CYCAPTION | The height of a caption area, in pixels. | Integer | Public |
| SM_CYCURSOR | The height of a cursor, in pixels.  The system cannot create cursors of other sizes. | Integer | Public |
| SM_CYDLGFRAME | This value is the same as SM_CYFIXEDFRAME. | Integer | Public |
| SM_CYDOUBLECLK | The height of the rectangle around the location of a first click in a double-click sequence, in pixels.  The second click must occur within the rectangle defined by SM_CXDOUBLECLK and SM_CYDOUBLECLK for the system to consider the two clicks a double-click.  The two clicks must also occur within a specified time.  To set the height of the double-click rectangle, call SystemParametersInfo with SPI_SETDOUBLECLKHEIGHT. | Integer | Public |
| SM_CYDRAG | The number of pixels above and below a mouse-down point that the mouse pointer can move before a drag operation begins.  This allows the user to click and release the mouse button easily without unintentionally starting a drag operation.  If this value is negative, it is subtracted from above the mouse-down point and added below it. | Integer | Public |
| SM_CYEDGE | The height of a 3-D border, in pixels.  This is the 3-D counterpart of SM_CYBORDER. | Integer | Public |
| SM_CYFIXEDFRAME | The thickness of the frame around the perimeter of a window that has a caption but is not sizable, in pixels.  SM_CXFIXEDFRAME is the height of the horizontal border, and SM_CYFIXEDFRAME is the width of the vertical border.  This value is the same as SM_CYDLGFRAME. | Integer | Public |
| SM_CYFOCUSBORDER | The height of the top and bottom edges of the focus rectangle drawn by DrawFocusRect.  This value is in pixels.  Windows 2000:  This value is not supported. | Integer | Public |
| SM_CYFRAME | This value is the same as SM_CYSIZEFRAME. | Integer | Public |
| SM_CYFULLSCREEN | The height of the client area for a full-screen window on the primary display monitor, in pixels.  To get the coordinates of the portion of the screen not obscured by the system taskbar or by application desktop toolbars, call the SystemParametersInfo function with the SPI_GETWORKAREA value. | Integer | Public |
| SM_CYHSCROLL | The height of a horizontal scroll bar, in pixels. | Integer | Public |
| SM_CYICON | The default height of an icon, in pixels.  The LoadIcon function can load only icons with the dimensions SM_CXICON and SM_CYICON. | Integer | Public |
| SM_CYICONSPACING | The height of a grid cell for items in large icon view, in pixels.  Each item fits into a rectangle of size SM_CXICONSPACING by SM_CYICONSPACING when arranged.  This value is always greater than or equal to SM_CYICON. | Integer | Public |
| SM_CYKANJIWINDOW | For double byte character set versions of the system, this is the height of the Kanji window at the bottom of the screen, in pixels. | Integer | Public |
| SM_CYMAXIMIZED | The default height, in pixels, of a maximized top-level window on the primary display monitor. | Integer | Public |
| SM_CYMAXTRACK | The default maximum height of a window that has a caption and sizing borders, in pixels.  This metric refers to the entire desktop.  The user cannot drag the window frame to a size larger than these dimensions.  A window can override this value by processing the WM_GETMINMAXINFO message. | Integer | Public |
| SM_CYMENU | The height of a single-line menu bar, in pixels. | Integer | Public |
| SM_CYMENUCHECK | The height of the default menu check-mark bitmap, in pixels. | Integer | Public |
| SM_CYMENUSIZE | The height of menu bar buttons, such as the child window close button that is used in the multiple document interface, in pixels. | Integer | Public |
| SM_CYMIN | The minimum height of a window, in pixels. | Integer | Public |
| SM_CYMINIMIZED | The height of a minimized window, in pixels. | Integer | Public |
| SM_CYMINSPACING | The height of a grid cell for a minimized window, in pixels.  Each minimized window fits into a rectangle this size when arranged.  This value is always greater than or equal to SM_CYMINIMIZED. | Integer | Public |
| SM_CYMINTRACK | The minimum tracking height of a window, in pixels.  The user cannot drag the window frame to a size smaller than these dimensions.  A window can override this value by processing the WM_GETMINMAXINFO message. | Integer | Public |
| SM_CYSCREEN | The height of the screen of the primary display monitor, in pixels.  This is the same value obtained by calling GetDeviceCaps as follows:  GetDeviceCaps( hdcPrimaryMonitor, VERTRES). | Integer | Public |
| SM_CYSIZE | The height of a button in a window caption or title bar, in pixels. | Integer | Public |
| SM_CYSIZEFRAME | The thickness of the sizing border around the perimeter of a window that can be resized, in pixels.  SM_CXSIZEFRAME is the width of the horizontal border, and SM_CYSIZEFRAME is the height of the vertical border.  This value is the same as SM_CYFRAME. | Integer | Public |
| SM_CYSMCAPTION | The height of a small caption, in pixels. | Integer | Public |
| SM_CYSMICON | The recommended height of a small icon, in pixels.  Small icons typically appear in window captions and in small icon view. | Integer | Public |
| SM_CYSMSIZE | The height of small caption buttons, in pixels. | Integer | Public |
| SM_CYVIRTUALSCREEN | The height of the virtual screen, in pixels.  The virtual screen is the bounding rectangle of all display monitors.  The SM_YVIRTUALSCREEN metric is the coordinates for the top of the virtual screen. | Integer | Public |
| SM_CYVSCROLL | The height of the arrow bitmap on a vertical scroll bar, in pixels. | Integer | Public |
| SM_CYVTHUMB | The height of the thumb box in a vertical scroll bar, in pixels. | Integer | Public |
| SM_DBCSENABLED | Nonzero if User32.dll supports DBCS; otherwise, 0. | Integer | Public |
| SM_DEBUG | Nonzero if the debug version of User.exe is installed; otherwise, 0. | Integer | Public |
| SM_DIGITIZER | Nonzero if the current operating system is Windows 7 or Windows Server 2008 R2 and the Tablet PC Input service is started; otherwise, 0.  The return value is a bitmask that specifies the type of digitizer input supported by the device. For more information, see Remarks.  Windows Server 2008, Windows Vista, and Windows XP/2000:  This value is not supported. | Integer | Public |
| SM_IMMENABLED | Nonzero if Input Method Manager/Input Method Editor features are enabled; otherwise, 0.  SM_IMMENABLED indicates whether the system is ready to use a Unicode-based IME on a Unicode application.  To ensure that a language-dependent IME works, check SM_DBCSENABLED and the system ANSI code page.  Otherwise the ANSI-to-Unicode conversion may not be performed correctly, or some components like fonts or registry settings may not be present. | Integer | Public |
| SM_MAXIMUMTOUCHES | Nonzero if there are digitizers in the system; otherwise, 0.  SM_MAXIMUMTOUCHES returns the aggregate maximum of the maximum number of contacts supported by every digitizer in the system.  If the system has only single-touch digitizers, the return value is 1.  If the system has multi-touch digitizers, the return value is the number of simultaneous contacts the hardware can provide.  Windows Server 2008, Windows Vista, and Windows XP/2000:  This value is not supported. | Integer | Public |
| SM_MEDIACENTER | Nonzero if the current operating system is the Windows XP, Media Center Edition, 0 if not. | Integer | Public |
| SM_MENUDROPALIGNMENT | Nonzero if drop-down menus are right-aligned with the corresponding menu-bar item; 0 if the menus are left-aligned. | Integer | Public |
| SM_MIDEASTENABLED | Nonzero if the system is enabled for Hebrew and Arabic languages, 0 if not. | Integer | Public |
| SM_MOUSEPRESENT | Nonzero if a mouse is installed; otherwise, 0.  This value is rarely zero, because of support for virtual mice and because some systems detect the presence of the port instead of the presence of a mouse. | Integer | Public |
| SM_MOUSEWHEELPRESENT | Nonzero if a mouse with a vertical scroll wheel is installed; otherwise 0. | Integer | Public |
| SM_NETWORK | The least significant bit is set if a network is present; otherwise, it is cleared.  The other bits are reserved for future use. | Integer | Public |
| SM_PENWINDOWS | Nonzero if the Microsoft Windows for Pen computing extensions are installed; zero otherwise. | Integer | Public |
| SM_REMOTECONTROL | This system metric is used in a Terminal Services environment to determine if the current Terminal Server session is being remotely controlled.  Its value is nonzero if the current session is remotely controlled; otherwise, 0.  You can use terminal services management tools such as Terminal Services Manager (tsadmin.msc) and shadow.exe to control a remote session.  When a session is being remotely controlled, another user can view the contents of that session and potentially interact with it. | Integer | Public |
| SM_REMOTESESSION | This system metric is used in a Terminal Services environment. If the calling process is associated with a Terminal Services client session, the return value is nonzero. If the calling process is associated with the Terminal Services console session, the return value is 0.  Windows Server 2003 and Windows XP:  The console session is not necessarily the physical console.  For more information, see WTSGetActiveConsoleSessionId. | Integer | Public |
| SM_SAMEDISPLAYFORMAT | Nonzero if all the display monitors have the same color format, otherwise, 0.  Two displays can have the same bit depth, but different color formats.  For example, the red, green, and blue pixels can be encoded with different numbers of bits, or those bits can be located in different places in a pixel color value. | Integer | Public |
| SM_SECURE | This system metric should be ignored; it always returns 0. | Integer | Public |
| SM_SERVERR2 | The build number if the system is Windows Server 2003 R2; otherwise, 0. | Integer | Public |
| SM_SHOWSOUNDS | Nonzero if the user requires an application to present information visually in situations where it would otherwise present the information only in audible form; otherwise, 0. | Integer | Public |
| SM_SHUTTINGDOWN | Nonzero if the current session is shutting down; otherwise, 0.  Windows 2000:  This value is not supported. | Integer | Public |
| SM_SLOWMACHINE | Nonzero if the computer has a low-end (slow) processor; otherwise, 0. | Integer | Public |
| SM_STARTER | Nonzero if the current operating system is Windows 7 Starter Edition, Windows Vista Starter, or Windows XP Starter Edition; otherwise, 0. | Integer | Public |
| SM_SWAPBUTTON | Nonzero if the meanings of the left and right mouse buttons are swapped; otherwise, 0. | Integer | Public |
| SM_SYSTEMDOCKED | Reflects the state of the docking mode, 0 for Undocked Mode and non-zero otherwise.  When this system metric changes, the system sends a broadcast message via WM_SETTINGCHANGE with "SystemDockMode" in the LPARAM. | Integer | Public |
| SM_TABLETPC | Nonzero if the current operating system is the Windows XP Tablet PC edition or if the current operating system is Windows Vista or Windows 7 and the Tablet PC Input service is started; otherwise, 0.  The SM_DIGITIZER setting indicates the type of digitizer input supported by a device running Windows 7 or Windows Server 2008 R2.  For more information, see Remarks. | Integer | Public |
| SM_XVIRTUALSCREEN | The coordinates for the left side of the virtual screen.  The virtual screen is the bounding rectangle of all display monitors.  The SM_CXVIRTUALSCREEN metric is the width of the virtual screen. | Integer | Public |
| SM_YVIRTUALSCREEN | The coordinates for the top of the virtual screen.  The virtual screen is the bounding rectangle of all display monitors.  The SM_CYVIRTUALSCREEN metric is the height of the virtual screen. | Integer | Public |
| SWP_ASYNCWINDOWPOS | If the calling thread and the thread that owns the window are attached to different input queues, the system posts the request to the thread that owns the window.  This prevents the calling thread from blocking its execution while other threads process the request. | Unsignedint | Public |
| SWP_DEFERERASE | Prevents generation of the WM_SYNCPAINT message. | Unsignedint | Public |
| SWP_DRAWFRAME | Draws a frame (defined in the window's class description) around the window. | Unsignedint | Public |
| SWP_FRAMECHANGED | Applies new frame styles set using the SetWindowLong function.  Sends a WM_NCCALCSIZE message to the window, even if the window's size is not being changed.  If this flag is not specified, WM_NCCALCSIZE is sent only when the window's size is being changed. | Unsignedint | Public |
| SWP_HIDEWINDOW | Hides the window. | Unsignedint | Public |
| SWP_NOACTIVATE | Does not activate the window.  If this flag is not set, the window is activated and moved to the top of either the topmost or non-topmost group (depending on the setting of the hWndInsertAfter parameter). | Unsignedint | Public |
| SWP_NOCOPYBITS | Discards the entire contents of the client area. If this flag is not specified, the valid contents of the client area are saved and copied back into the client area after the window is sized or repositioned. | Unsignedint | Public |
| SWP_NOMOVE | Retains the current position (ignores X and Y parameters). | Unsignedint | Public |
| SWP_NOOWNERZORDER | Does not change the owner window's position in the Z order. | Unsignedint | Public |
| SWP_NOREDRAW | Does not redraw changes.  If this flag is set, no repainting of any kind occurs.  This applies to the client area, the nonclient area (including the title bar and scroll bars), and any part of the parent window uncovered as a result of the window being moved.  When this flag is set, the application must explicitly invalidate or redraw any parts of the window and parent window that need redrawing. | Unsignedint | Public |
| SWP_NOREPOSITION | Same as the SWP_NOOWNERZORDER flag. | Unsignedint | Public |
| SWP_NOSENDCHANGING | Prevents the window from receiving the WM_WINDOWPOSCHANGING message. | Unsignedint | Public |
| SWP_NOSIZE | Retains the current size (ignores the cx and cy parameters). | Unsignedint | Public |
| SWP_NOZORDER | Retains the current Z order (ignores the hWndInsertAfter parameter). | Unsignedint | Public |
| SWP_SHOWWINDOW | Displays the window. | Unsignedint | Public |
| WS_BORDER | Constant set to 8388608 | UnsignedLong | Public |
| WS_CAPTION | Constant set to 12582912 | UnsignedLong | Public |
| WS_CHILD | Constant set to 1073741824 | UnsignedLong | Public |
| WS_CHILDWINDOW | Constant set to WS_CHILD | UnsignedLong | Public |
| WS_CLIPCHILDREN | Constant set to 33554432 | UnsignedLong | Public |
| WS_CLIPSIBLINGS | Constant set to 67108864 | UnsignedLong | Public |
| WS_DISABLED | Constant set to 134217728 | UnsignedLong | Public |
| WS_DLGFRAME | Constant set to 4194304 | UnsignedLong | Public |
| WS_EX_ACCEPTFILES | The window accepts drag-drop files. | UnsignedLong | Public |
| WS_EX_APPWINDOW | Forces a top-level window onto the taskbar when the window is visible. | UnsignedLong | Public |
| WS_EX_CLIENTEDGE | The window has a border with a sunken edge. | UnsignedLong | Public |
| WS_EX_COMPOSITED | Paints all descendants of a window in bottom-to-top painting order using double-buffering. For more information, see Remarks. This cannot be used if the window has a class style of either CS_OWNDC or CS_CLASSDC.  Windows 2000:  This style is not supported. | UnsignedLong | Public |
| WS_EX_CONTEXTHELP | The title bar of the window includes a question mark. When the user clicks the question mark, the cursor changes to a question mark with a pointer. If the user then clicks a child window, the child receives a WM_HELP message. The child window should pass the message to the parent window procedure, which should call the WinHelp function using the HELP_WM_HELP command. The Help application displays a pop-up window that typically contains help for the child window.  WS_EX_CONTEXTHELP cannot be used with the WS_MAXIMIZEBOX or WS_MINIMIZEBOX styles. | UnsignedLong | Public |
| WS_EX_CONTROLPARENT | The window itself contains child windows that should take part in dialog box navigation. If this style is specified, the dialog manager recurses into children of this window when performing navigation operations such as handling the TAB key, an arrow key, or a keyboard mnemonic. | UnsignedLong | Public |
| WS_EX_DLGMODALFRAME | The window has a double border; the window can, optionally, be created with a title bar by specifying the WS_CAPTION style in the dwStyle parameter. | UnsignedLong | Public |
| WS_EX_LAYERED | The window is a layered window. This style cannot be used if the window has a class style of either CS_OWNDC or CS_CLASSDC.  Windows 8:  The WS_EX_LAYERED style is supported for top-level windows and child windows. Previous Windows versions support WS_EX_LAYERED only for top-level windows. | UnsignedLong | Public |
| WS_EX_LAYOUTRTL | If the shell language is Hebrew, Arabic, or another language that supports reading order alignment, the horizontal origin of the window is on the right edge. Increasing horizontal values advance to the left. | UnsignedLong | Public |
| WS_EX_LEFT | The window has generic left-aligned properties. This is the default. | UnsignedLong | Public |
| WS_EX_LEFTSCROLLBAR | If the shell language is Hebrew, Arabic, or another language that supports reading order alignment, the vertical scroll bar (if present) is to the left of the client area. For other languages, the style is ignored. | UnsignedLong | Public |
| WS_EX_LTRREADING | The window text is displayed using left-to-right reading-order properties. This is the default. | UnsignedLong | Public |
| WS_EX_MDICHILD | The window is a MDI child window. | UnsignedLong | Public |
| WS_EX_NOACTIVATE | A top-level window created with this style does not become the foreground window when the user clicks it. The system does not bring this window to the foreground when the user minimizes or closes the foreground window.  To activate the window, use the SetActiveWindow or SetForegroundWindow function.  The window does not appear on the taskbar by default. To force the window to appear on the taskbar, use the WS_EX_APPWINDOW style. | UnsignedLong | Public |
| WS_EX_NOINHERITLAYOUT | The window does not pass its window layout to its child windows. | UnsignedLong | Public |
| WS_EX_NOPARENTNOTIFY | The child window created with this style does not send the WM_PARENTNOTIFY message to its parent window when it is created or destroyed. | UnsignedLong | Public |
| WS_EX_OVERLAPPEDWINDOW | Constant set to WS_EX_WINDOWEDGE + WS_EX_CLIENTEDGE | UnsignedLong | Public |
| WS_EX_PALETTEWINDOW | Constant set to WS_EX_WINDOWEDGE + WS_EX_TOOLWINDOW + WS_EX_TOPMOST | UnsignedLong | Public |
| WS_EX_RIGHT | The window has generic "right-aligned" properties. This depends on the window class. This style has an effect only if the shell language is Hebrew, Arabic, or another language that supports reading-order alignment; otherwise, the style is ignored.  Using the WS_EX_RIGHT style for static or edit controls has the same effect as using the SS_RIGHT or ES_RIGHT style, respectively. Using this style with button controls has the same effect as using BS_RIGHT and BS_RIGHTBUTTON styles. | UnsignedLong | Public |
| WS_EX_RIGHTSCROLLBAR | The vertical scroll bar (if present) is to the right of the client area. This is the default. | UnsignedLong | Public |
| WS_EX_RTLREADING | If the shell language is Hebrew, Arabic, or another language that supports reading-order alignment, the window text is displayed using right-to-left reading-order properties. For other languages, the style is ignored. | UnsignedLong | Public |
| WS_EX_STATICEDGE | The window has a three-dimensional border style intended to be used for items that do not accept user input. | UnsignedLong | Public |
| WS_EX_TOOLWINDOW | The window is intended to be used as a floating toolbar. A tool window has a title bar that is shorter than a normal title bar, and the window title is drawn using a smaller font. A tool window does not appear in the taskbar or in the dialog that appears when the user presses ALT+TAB. If a tool window has a system menu, its icon is not displayed on the title bar. However, you can display the system menu by right-clicking or by typing ALT+SPACE. | UnsignedLong | Public |
| WS_EX_TOPMOST | The window should be placed above all non-topmost windows and should stay above them, even when the window is deactivated. To add or remove this style, use the SetWindowPos function. | UnsignedLong | Public |
| WS_EX_TRANSPARENT | The window should not be painted until siblings beneath the window (that were created by the same thread) have been painted. The window appears transparent because the bits of underlying sibling windows have already been painted.  To achieve transparency without these restrictions, use the SetWindowRgn function. | UnsignedLong | Public |
| WS_EX_WINDOWEDGE | The window has a border with a raised edge. | UnsignedLong | Public |
| WS_GROUP | Constant set to 131072 | UnsignedLong | Public |
| WS_HSCROLL | Constant set to 1048576 | UnsignedLong | Public |
| WS_ICONIC | Constant set to WS_MINIMIZE | UnsignedLong | Public |
| WS_MAXIMIZE | Constant set to 16777216 | UnsignedLong | Public |
| WS_MAXIMIZEBOX | Constant set to 65536 | UnsignedLong | Public |
| WS_MINIMIZE | Constant set to 536870912 | UnsignedLong | Public |
| WS_MINIMIZEBOX | Constant set to 131072 | UnsignedLong | Public |
| WS_OVERLAPPED | Constant set to 0 | UnsignedLong | Public |
| WS_OVERLAPPEDWINDOW | Constant set to WS_OVERLAPPED + WS_CAPTION + WS_SYSMENU + WS_THICKFRAME + WS_MINIMIZEBOX + WS_MAXIMIZEBOX | UnsignedLong | Public |
| WS_POPUP | Constant set to 2147483648 | UnsignedLong | Public |
| WS_POPUPWINDOW | Constant set to WS_POPUP + WS_BORDER + WS_SYSMENU | UnsignedLong | Public |
| WS_SIZEBOX | Constant set to WS_THICKFRAME | UnsignedLong | Public |
| WS_SYSMENU | Constant set to 524288 | UnsignedLong | Public |
| WS_TABSTOP | Constant set to 65536 | UnsignedLong | Public |
| WS_THICKFRAME | Constant set to 262144 | UnsignedLong | Public |
| WS_TILED | Constant set to WS_OVERLAPPED | UnsignedLong | Public |
| WS_TILEDWINDOW | Constant set to WS_OVERLAPPEDWINDOW | UnsignedLong | Public |
| WS_VISIBLE | Constant set to 268435456 | UnsignedLong | Public |
| WS_VSCROLL | Constant set to 2097152 | UnsignedLong | Public |
