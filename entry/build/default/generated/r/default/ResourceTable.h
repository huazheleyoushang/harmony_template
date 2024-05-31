/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef RESOURCE_TABLE_H
#define RESOURCE_TABLE_H

#include<stdint.h>

namespace OHOS {
const int32_t STRING_ENTRYABILITY_DESC = 0x01000002;
const int32_t STRING_ENTRYABILITY_LABEL = 0x01000003;
const int32_t STRING_ABOUT = 0x01000004;
const int32_t STRING_ACCOUNT = 0x01000005;
const int32_t STRING_APP_NAME = 0x01000000;
const int32_t STRING_BIG_NAME_FLASH = 0x01000006;
const int32_t STRING_CLEAR_CACHE = 0x01000007;
const int32_t STRING_DATA_MANAGEMENT = 0x01000008;
const int32_t STRING_EMPTY = 0x010000a3;
const int32_t STRING_FAVORITES = 0x01000009;
const int32_t STRING_FIND_GOOD = 0x0100000a;
const int32_t STRING_FORGOT_PASSWORD = 0x0100000b;
const int32_t STRING_GROUP = 0x0100000c;
const int32_t STRING_HISTORY_RECORD = 0x0100000d;
const int32_t STRING_HOME_APP_MANAGEMENT = 0x010000b8;
const int32_t STRING_HOME_DISPLAY_AND_BRIGHTNESS = 0x010000b9;
const int32_t STRING_HOME_DOC = 0x010000a4;
const int32_t STRING_HOME_LIST = 0x0100000e;
const int32_t STRING_HOME_PRIVACY = 0x010000ba;
const int32_t STRING_HOME_SETTING_THE_FONT_SIZE = 0x010000bb;
const int32_t STRING_HOME_STORAGE = 0x010000bc;
const int32_t STRING_HOME_TITLE = 0x010000bd;
const int32_t STRING_HOME_VOICE = 0x010000be;
const int32_t STRING_INPUT_EMPTY_TIPS = 0x0100000f;
const int32_t STRING_LOGIN = 0x01000010;
const int32_t STRING_LOGIN_MORE = 0x01000011;
const int32_t STRING_LOGIN_PAGE = 0x01000012;
const int32_t STRING_LOGIN_SUCCESS = 0x01000013;
const int32_t STRING_MAINPAGE_BRAND = 0x01000014;
const int32_t STRING_MAINPAGE_FOUND = 0x01000015;
const int32_t STRING_MAINPAGE_NEW = 0x01000016;
const int32_t STRING_MAINPAGE_TABTITLES_HOME = 0x01000017;
const int32_t STRING_MAINPAGE_TABTITLES_MINE = 0x01000018;
const int32_t STRING_MAINPAGE_TEXT_BRAND = 0x01000019;
const int32_t STRING_MAINPAGE_TEXT_FOUND = 0x0100001a;
const int32_t STRING_MAINPAGE_TEXT_NEW = 0x0100001b;
const int32_t STRING_MAINPAGE_TEXT_TOP = 0x0100001c;
const int32_t STRING_MAINPAGE_TOP = 0x0100001d;
const int32_t STRING_MENU_SETTINGS = 0x0100001e;
const int32_t STRING_MESSAGE = 0x0100001f;
const int32_t STRING_MESSAGE_LOGIN = 0x01000020;
const int32_t STRING_MODULE_DESC = 0x01000021;
const int32_t STRING_MORE_BIG_NAMES = 0x01000022;
const int32_t STRING_MY_GOAL = 0x01000023;
const int32_t STRING_MY_LOVE = 0x01000024;
const int32_t STRING_NEW_PRODUCT_DEBUT = 0x01000025;
const int32_t STRING_OTHER_LOGIN_METHOD = 0x01000026;
const int32_t STRING_PASSWORD = 0x01000027;
const int32_t STRING_PUSH_NOTIFICATIONS = 0x01000028;
const int32_t STRING_RANKINGS = 0x01000029;
const int32_t STRING_RECYCLE_BIN = 0x0100002a;
const int32_t STRING_REGISTER_ACCOUNT = 0x0100002b;
const int32_t STRING_SET_TITLE = 0x010000bf;
const int32_t STRING_SETTING_ACCOUNT_EMAIL = 0x0100002c;
const int32_t STRING_SETTING_ACCOUNT_NAME = 0x0100002d;
const int32_t STRING_SETTING_BUTTON = 0x0100002e;
const int32_t STRING_SETTING_LIST_ABOUT = 0x0100002f;
const int32_t STRING_SETTING_LIST_DATA = 0x01000030;
const int32_t STRING_SETTING_LIST_MENU = 0x01000031;
const int32_t STRING_SETTING_LIST_NEWS = 0x01000032;
const int32_t STRING_SETTING_LIST_PRIVACY = 0x01000033;
const int32_t STRING_SETTING_LIST_STORAGE = 0x01000034;
const int32_t STRING_SETTING_TOGGLE = 0x01000035;
const int32_t STRING_SHANGHAI_STATION = 0x010000c0;
const int32_t STRING_SHOPPING_CART = 0x01000036;
const int32_t STRING_VERTICAL_LINE = 0x01000037;
const int32_t STRING_XIAMEN_STATION = 0x01000038;
const int32_t COLOR_BACKGROUND = 0x01000039;
const int32_t COLOR_HOME_GRID_FONTCOLOR = 0x0100003a;
const int32_t COLOR_LINE_COLOR = 0x0100003b;
const int32_t COLOR_LOADING_COLOR = 0x0100003c;
const int32_t COLOR_LOGIN_BLUE_TEXT_COLOR = 0x0100003d;
const int32_t COLOR_LOGIN_BUTTON_COLOR = 0x0100003e;
const int32_t COLOR_LOGIN_MORE_TEXT_COLOR = 0x0100003f;
const int32_t COLOR_MAINPAGE_BACKGROUNDCOLOR = 0x01000040;
const int32_t COLOR_MAINPAGE_NORMAL = 0x01000041;
const int32_t COLOR_MAINPAGE_SELECTED = 0x01000042;
const int32_t COLOR_OTHER_LOGIN_TEXT_COLOR = 0x01000043;
const int32_t COLOR_PLACEHOLDER_COLOR = 0x01000044;
const int32_t COLOR_SETTING_BUTTON_BACKGROUNDCOLOR = 0x01000045;
const int32_t COLOR_SETTING_BUTTON_FONTCOLOR = 0x01000046;
const int32_t COLOR_START_WINDOW_BACKGROUND = 0x01000047;
const int32_t COLOR_TEXT = 0x010000a5;
const int32_t COLOR_TITLE_TEXT_COLOR = 0x01000048;
const int32_t COLOR_WHITE = 0x01000049;
const int32_t FLOAT_BIG_TEXT_SIZE = 0x0100004a;
const int32_t FLOAT_FORGOT_MARGIN_TOP = 0x0100004b;
const int32_t FLOAT_HOME_BACKGROUNDIMAGE_BORDERRADIUS = 0x0100004c;
const int32_t FLOAT_HOME_GRID_BORDERRADIUS = 0x0100004d;
const int32_t FLOAT_HOME_GRID_COLUMNSGAP = 0x0100004e;
const int32_t FLOAT_HOME_GRID_HEIGHT = 0x0100004f;
const int32_t FLOAT_HOME_GRID_MARGIN = 0x01000050;
const int32_t FLOAT_HOME_GRID_PADDING = 0x01000051;
const int32_t FLOAT_HOME_GRID_ROWGAP = 0x01000052;
const int32_t FLOAT_HOME_HOMECELL_HEIGHT = 0x01000053;
const int32_t FLOAT_HOME_HOMECELL_MARGIN = 0x01000054;
const int32_t FLOAT_HOME_HOMECELL_SIZE = 0x01000055;
const int32_t FLOAT_HOME_HOMECELL_WIDTH = 0x01000056;
const int32_t FLOAT_HOME_LIST_MARGIN = 0x01000057;
const int32_t FLOAT_HOME_LIST_PADDING = 0x01000058;
const int32_t FLOAT_HOME_SECONDGRID_HEIGHT = 0x01000059;
const int32_t FLOAT_HOME_SECONDGRID_MARGIN = 0x0100005a;
const int32_t FLOAT_HOME_SWIPER_BORDERRADIUS = 0x0100005b;
const int32_t FLOAT_HOME_SWIPER_MARGIN = 0x0100005c;
const int32_t FLOAT_HOME_TEXT_MARGIN = 0x0100005d;
const int32_t FLOAT_INPUT_MARGIN_TOP = 0x0100005e;
const int32_t FLOAT_LINE_HEIGHT = 0x0100005f;
const int32_t FLOAT_LITTLE_TEXT_SIZE = 0x01000060;
const int32_t FLOAT_LOGIN_BUTTON_HEIGHT = 0x01000061;
const int32_t FLOAT_LOGIN_BUTTON_MARGIN_BOTTOM = 0x01000062;
const int32_t FLOAT_LOGIN_BUTTON_MARGIN_TOP = 0x01000063;
const int32_t FLOAT_LOGIN_INPUT_HEIGHT = 0x01000064;
const int32_t FLOAT_LOGIN_MORE_MARGIN_BOTTOM = 0x01000065;
const int32_t FLOAT_LOGIN_MORE_MARGIN_TOP = 0x01000066;
const int32_t FLOAT_LOGIN_PAGE_PADDING_BOTTOM = 0x01000067;
const int32_t FLOAT_LOGIN_PROGRESS_MARGIN_TOP = 0x01000068;
const int32_t FLOAT_LOGIN_PROGRESS_SIZE = 0x01000069;
const int32_t FLOAT_LOGO_IMAGE_SIZE = 0x0100006a;
const int32_t FLOAT_LOGO_MARGIN_BOTTOM = 0x0100006b;
const int32_t FLOAT_LOGO_MARGIN_TOP = 0x0100006c;
const int32_t FLOAT_MAINPAGE_BARHEIGHT = 0x0100006d;
const int32_t FLOAT_MAINPAGE_BASETAB_MARGIN = 0x0100006e;
const int32_t FLOAT_MAINPAGE_BASETAB_SIZE = 0x0100006f;
const int32_t FLOAT_MAINPAGE_BASETAB_TOP = 0x01000070;
const int32_t FLOAT_MAINPAGE_PADDING = 0x01000071;
const int32_t FLOAT_MAINPAGE_TABTITLES_MARGIN = 0x01000072;
const int32_t FLOAT_MAINPAGE_TABTITLES_PADDING = 0x01000073;
const int32_t FLOAT_MAIN_TAB_FONTSIZE = 0x01000074;
const int32_t FLOAT_NORMAL_TEXT_SIZE = 0x01000075;
const int32_t FLOAT_OTHER_LOGIN_IMAGE_SIZE = 0x01000076;
const int32_t FLOAT_OTHER_LOGIN_MARGIN_BOTTOM = 0x01000077;
const int32_t FLOAT_OTHER_LOGIN_MARGIN_TOP = 0x01000078;
const int32_t FLOAT_PAGE_PADDING_HOR = 0x01000079;
const int32_t FLOAT_PAGE_TITLE_TEXT_SIZE = 0x0100007a;
const int32_t FLOAT_SETTING_ACCOUNT_BORDERRADIUS = 0x0100007b;
const int32_t FLOAT_SETTING_ACCOUNT_FONTSIZE = 0x0100007c;
const int32_t FLOAT_SETTING_ACCOUNT_HEIGHT = 0x0100007d;
const int32_t FLOAT_SETTING_ACCOUNT_MARGIN = 0x0100007e;
const int32_t FLOAT_SETTING_ACCOUNT_PADDING = 0x0100007f;
const int32_t FLOAT_SETTING_ACCOUNT_SIZE = 0x01000080;
const int32_t FLOAT_SETTING_ACCOUNT_TEXT_HEIGHT = 0x01000081;
const int32_t FLOAT_SETTING_BUTTON_BOTTOM = 0x01000082;
const int32_t FLOAT_SETTING_IC_MARGIN_LEFT = 0x010000cf;
const int32_t FLOAT_SETTING_IC_MARGIN_RIGHT = 0x010000d0;
const int32_t FLOAT_SETTING_ITEM_DIVIDER_START_MARGIN = 0x010000d1;
const int32_t FLOAT_SETTING_ITEM_DIVIDER_WIDTH = 0x010000d2;
const int32_t FLOAT_SETTING_ITEM_HEIGHT = 0x010000d3;
const int32_t FLOAT_SETTING_ITEM_IC_SIZE = 0x010000d4;
const int32_t FLOAT_SETTING_JUMP_HEIGHT = 0x01000083;
const int32_t FLOAT_SETTING_JUMP_WIDTH = 0x01000084;
const int32_t FLOAT_SETTING_LIST_BORDERRADIUS = 0x01000085;
const int32_t FLOAT_SETTING_LIST_ENDMARGIN = 0x01000086;
const int32_t FLOAT_SETTING_LIST_HEIGHT = 0x01000087;
const int32_t FLOAT_SETTING_LIST_PADDING = 0x01000088;
const int32_t FLOAT_SETTING_LIST_STARTMARGIN = 0x01000089;
const int32_t FLOAT_SETTING_LIST_STROKEWIDTH = 0x0100008a;
const int32_t FLOAT_SETTING_NAME_MARGIN = 0x0100008b;
const int32_t FLOAT_SETTING_PADDING = 0x0100008c;
const int32_t FLOAT_SETTING_SETTINGCELL_LEFT = 0x0100008d;
const int32_t FLOAT_SETTING_SETTINGCELL_RIGHT = 0x0100008e;
const int32_t FLOAT_SETTING_SIZE = 0x0100008f;
const int32_t FLOAT_SMALL_TEXT_SIZE = 0x01000090;
const int32_t FLOAT_TITLE_IC_MARGIN = 0x010000d5;
const int32_t FLOAT_TITLE_IC_SIZE = 0x010000d6;
const int32_t FLOAT_TITLE_PADDING_LEFT = 0x010000d7;
const int32_t FLOAT_TITLE_TEXT_MARGIN_LEFT = 0x010000d8;
const int32_t FLOAT_VERTICAL_LINE_MARGIN = 0x01000091;
const int32_t MEDIA_ABOUT = 0x01000092;
const int32_t MEDIA_ACCOUNT = 0x01000093;
const int32_t MEDIA_APP_ICON = 0x01000001;
const int32_t MEDIA_ARROW = 0x01000094;
const int32_t MEDIA_BRAND = 0x01000095;
const int32_t MEDIA_CIRCLE = 0x01000096;
const int32_t MEDIA_DATA = 0x01000097;
const int32_t MEDIA_DISCOVER_NORMAL = 0x01000098;
const int32_t MEDIA_DISCOVER_SELECTED = 0x01000099;
const int32_t MEDIA_DOC_NORMAL = 0x010000c1;
const int32_t MEDIA_DOC_SELECTED = 0x010000c2;
const int32_t MEDIA_FAVORITE = 0x0100009a;
const int32_t MEDIA_FIG1 = 0x0100009b;
const int32_t MEDIA_FIG2 = 0x0100009c;
const int32_t MEDIA_FIG3 = 0x0100009d;
const int32_t MEDIA_FIG4 = 0x0100009e;
const int32_t MEDIA_FOUND = 0x0100009f;
const int32_t MEDIA_HOME_NORMAL = 0x010000a0;
const int32_t MEDIA_HOME_SELECTED = 0x010000a1;
const int32_t MEDIA_IC_APP_MANAGEMENT = 0x010000c3;
const int32_t MEDIA_IC_DISPLAY_AND_BRIGHTNESS = 0x010000c4;
const int32_t MEDIA_IC_PRIVACY = 0x010000c5;
const int32_t MEDIA_IC_PUBLIC_BACK = 0x010000c6;
const int32_t MEDIA_IC_SETTING_THE_FONT_SIZE = 0x010000c7;
const int32_t MEDIA_IC_STORAGE = 0x010000c8;
const int32_t MEDIA_IC_VOICE = 0x010000c9;
const int32_t MEDIA_ICON = 0x010000a2;
const int32_t MEDIA_LEFT_HEAD = 0x010000ca;
const int32_t MEDIA_LOGIN_QR = 0x010000cb;
const int32_t MEDIA_LOGIN_WEIBO = 0x010000cc;
const int32_t MEDIA_LOGIN_WEIXIN = 0x010000cd;
const int32_t MEDIA_LOGO = 0x010000a6;
const int32_t MEDIA_LOVE = 0x010000a7;
const int32_t MEDIA_MENU = 0x010000a8;
const int32_t MEDIA_MESSAGE = 0x010000a9;
const int32_t MEDIA_MINE_NORMAL = 0x010000aa;
const int32_t MEDIA_MINE_SELECTED = 0x010000ab;
const int32_t MEDIA_NEW = 0x010000ac;
const int32_t MEDIA_NEWS = 0x010000ad;
const int32_t MEDIA_PRIVACY = 0x010000ae;
const int32_t MEDIA_RECORD = 0x010000af;
const int32_t MEDIA_RECYCLE = 0x010000b0;
const int32_t MEDIA_RIGHT_GREY = 0x010000b1;
const int32_t MEDIA_RIGHT_HEAD = 0x010000ce;
const int32_t MEDIA_SEARCH = 0x010000b2;
const int32_t MEDIA_SHOPPING = 0x010000b3;
const int32_t MEDIA_STORAGE = 0x010000b4;
const int32_t MEDIA_TARGET = 0x010000b5;
const int32_t MEDIA_TOP = 0x010000b6;
const int32_t PROFILE_MAIN_PAGES = 0x010000b7;
}
#endif