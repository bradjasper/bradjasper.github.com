// Generated by CoffeeScript 1.6.2
(function() {
  var embed_code;

  embed_code = function(code) {
    $("#arena .hostile_code").fadeOut().remove();
    return $("<div>", {
      "class": "hostile_code"
    }).html(code).appendTo("#arena");
  };

  $(function() {
    var css, css_index, next_css, prev_css, update_css;

    css = ["https://s-static.ak.fbcdn.net/rsrc.php/v2/yj/r/dtOhZNSQvGq.css", "https://s-static.ak.fbcdn.net/rsrc.php/v2/yr/r/Kr6iiFc3FBI.css", "https://s-static.ak.fbcdn.net/rsrc.php/v2/yY/r/u8iA3kXb8Y1.css", "https://s-static.ak.fbcdn.net/rsrc.php/v2/y4/r/wvX62CWS7Cl.css", "http://s.ytimg.com/yt/cssbin/www-core-vflQNVkcc.css", "http://s.ytimg.com/yt/cssbin/www-guide-feed2-vflfL2bnC.css", "http://l.yimg.com/zz/combo?nn/lib/metro/g/core_yui_3.4.2.css&nn/lib/metro/g/core_srvc_1.0.9.css&nn/lib/metro/g/core_mod_1.0.116.css&nn/lib/metro/g/fp/fp_widecc_0.0.23.css&nn/lib/metro/g/fp/fp_403_0.0.2.css&nn/lib/metro/g/masthead/masthead_0.2.141.css&nn/lib/metro/g/masthead/masthead_403_0.0.34.css&nn/lib/metro2/g/announcebar/announcebar_1.0.22.css&nn/lib/metro/g/contentcarousel/contentcarousel_widecc_0.0.12.css&nn/lib/metro/g/multimedia/multimedia_1.0.48.css&nn/lib/metro/g/contentcarousel/contentcarousel_news_0.0.10.css&nn/lib/metro/g/mostpopular/mostpopular_0.0.10.css&nn/lib/metro/g/majorevent/majorevent_3.0.5.css&nn/lib/metro/g/marketindices/marketindices_widecc_0.0.9.css&nn/lib/metro/g/news/offlead_0.1.15.css&nn/lib/metro/g/news/news_accordion_0.1.83.css&nn/lib/metro/g/contentcarousel/contentcarousel_polls_0.0.37.css&nn/lib/metro/g/tuc/tuc_wave3_0.0.20.css&nn/lib/metro/g/tabbar/tabbar_0.0.45.css&nn/lib/metro/g/uicontrib/locdrop_widget_0.0.6.css&nn/lib/metro/g/mail/mail_0.0.44.css&nn/lib/metro/g/mail/mail_403_0.0.21.css&nn/lib/metro/g/fptoday/fptoday_widecc_0.0.20.css&nn/lib/metro/g/pa/pa_widecc_0.1.25.css&nn/lib/metro/g/pa/pa_detached_0.1.91.css&nn/lib/metro/g/pa/pa_add_0.1.68.css&nn/lib/metro/g/tts/tts_widecc_0.0.18.css&nn/lib/metro/g/footer/footer_0.1.79.css&nn/lib/metro/g/footer/subfooter_0.0.15.css", "//bits.wikimedia.org/meta.wikimedia.org/load.php?debug=false&lang=en&modules=ext.gadget.wm-portal&only=styles&skin=vector&*", "Https://secure.shared.live.com/~Live.SiteContent.ID/~16.4.13/~/~/~/~/css/R3WinLive1033.css", "http://a0.twimg.com/a/1344442772/t1/css/t1_core_logged_out.bundle.css", "http://a0.twimg.com/a/1344442772/t1/css/t1_more.bundle.css", "http://z-ecx.images-amazon.com/images/G/01/nav2/gamma/websiteGridCSS/websiteGridCSS-websiteGridCSS-10164._V1_.css", "http://z-ecx.images-amazon.com/images/G/01/browser-scripts/us-site-wide-css-beacon/site-wide-5808467376._V1_.css", "http://z-ecx.images-amazon.com/images/G/01/s9-campaigns/s9-widget._V143214364_.css", "http://s2.licdn.com/scds/concat/common/css?h=3bifs78lai5i0ndyj1ew7316e-4cff62fozoxsbiyfz40j584kw-c5839km74lqu75dnankln5rgt-4uu2pkz5u0jch61r2nhpyyrn8-14ei741up8a35oqzaaqbo2zar-bf0i9bv8oqeq4shjzvzhms72i-4om4nn3a2z730xs82d78xj3be-4newiqesz8x3qjgqezmhywsri-ct4kfyj4tquup0bvqhttvymms-34ohz9lv9h6cjd8zhbmfk3tbw&fc=1", "http://s1.licdn.com/scds/concat/common/css?h=dmo1gwj6nlhvdvzx7rmluambv-vyhpztxhvu0gq7mut2vg62zi-a3asxml3bqqm4kfurd5q9srcg&fc=1", "http://a.tbcdn.cn/p/global/1.0/global-min.css", "http://a.tbcdn.cn/p/fp/2012/fp/??layout.css,dpl/dpl.css,sitenav/sitenav.css,logo/logo.css,search/search.css,nav/nav.css,product-list/product-list.css,mainpromo/mainpromo.css,attraction/attraction.css,notice/notice.css,status/status.css,interlayer/interlayer.css,cat/cat.css,convenience/convenience.css,act/act.css,expressway/expressway.css,guang/guang.css,hotsale/hotsale.css,helper/helper.css,footer/footer.css,recom_new/recom_new.css,local/local.css,globalshop/globalshop.css,guide/guide.css?t=2012080220120724.css", "http://col.stc.s-msn.com/br/sc/css/52/2488d24f533f797eebf2e5c5bdd0cd.css", "http://s2.wp.com/wp-content/themes/h4/style.css?m=1344781865g&5", "http://s1.wp.com/_static/??/wp-content/mu-plugins/post-flair/style.css,/wp-content/themes/h4/global.css?m=1344511341j", "//yandex.st/www/1.259/www/pages-desktop/www-css/_www-css.css", "http://ir.ebaystatic.com/v4css/z/en/y0eelaswyq2ctcbhtewx35vmq.css#Finding_BaseDS2_e785_Ear_en_US", "http://ir.ebaystatic.com/v4css/z/iy/r1bl1md51m4ttivxdc3i353e3.css#Finding_eBayHomePage_e785_Ear_en_US", "http://gh.ebaystatic.com/header/css/all.min?combo=32&rvr=51", "http://img.babylon.com/site/images/babylon9/header/new_header/black.css", "http://img.babylon.com/site/images/trial/new/trial.css", "http://img2.cache.netease.com/www/v2011/css/theme_blue1227.css", "http://img.t.sinajs.cn/t4/style/css/pages/register/v35login.css?version=dd8caa08a7b78233", "http://i.microsoft.com/en-us/homepage/style.cssx?k=~/shared/templates/components/mscomViews/VPivot/VPivot-css.aspx;~/shared/templates/components/mscomViews/grid/grid-css.aspx;~/shared/templates/components/mscomViews/hero/hero-css.aspx;~/shared/templates/components/mscomViews/List/list-css.aspx;~/shared/templates/components/mscomViews/controls/featureitem/featureItem-css.aspx&sc=/en-us/homepage/site.config&pc=&v=-820925690", "/en-us/homepage/shared/core/2/css/css.ashx?sc=/en-us/homepage/site.config&pt=hpPage", "http://i.microsoft.com/en-us/homepage/style.cssx?k=~/shared/templates/master/hpMaster/master-css.aspx;~/shared/templates/components/mscomViews/Header/header-css.aspx;~/shared/templates/components/mscomViews/Products/Products-css.aspx;~/shared/templates/components/mscomViews/ProductTiles/ProductTiles-css.aspx;~/shared/templates/components/mscomViews/ProductList/ProductList-css.aspx;~/shared/templates/components/mscomViews/Search/Search-css.aspx;~/shared/templates/components/mscomViews/LocalePicker/LocalePicker-css.aspx;~/shared/templates/components/mscomViews/Menu/menu-css.aspx;~/shared/templates/components/mscomViews/Footer/footer-css.aspx&sc=/en-us/homepage/site.config&pc=&v=-2141141143", "http://limg.imgsmail.ru/s/v/c/1.3/splash.css", "https://secure.assets.tumblr.com/stylesheets/compressed/global.css?d6c7da53bfac71208afddc2915f8b828", "https://secure.assets.tumblr.com/stylesheets/compressed/onboarding.css?1ed408de0b7818a4a5fd13deb77dd96f", "https://secure.assets.tumblr.com/stylesheets/compressed/dashboard.css?fd5a00224ccb023475b8a3b62636ead4", "http://www.sohu.com/upload/style/global1212.css", "http://www.sohu.com/upload/style/layout091102.css", "http://www.sohu.com/upload/style/style120730.css", "http://r1.suc.itc.cn/itoolbar/index/itoolbar.v2012070602.css", "http://st0.userapi.com/css/al/common.css?352", "http://st0.userapi.com/css/al/index.css?19", "http://st0.userapi.com/css/ui_controls.css?32", "http://www.craigslist.org/styles/craigslist.css?v=cfcb7850f35888cf9a62ff3c12b7d09c", "http://images.apple.com/global/nav/styles/navigation.css", "http://images.apple.com/global/styles/base.css", "http://images.apple.com/v/home/k/styles/home.css", "http://images.apple.com/home/styles/home.css", "http://images.apple.com/v/home/k/styles/billboard.css", "http://images.apple.com/home/styles/billboard.css", "http://passets-cdn.pinterest.com/css/pinboard_64afdb23.css", "https://www.paypalobjects.com/eboxapps/css/93/e72ec27e46a0be5345666edbe053c9.css", "http://www.ask.com/inc/css/lib/yui/reset-fonts-grids_r2.8.r56171-02.css", "http://static.bbci.co.uk/frameworks/barlesque/2.8.7/desktop/3.5/style/main.css", "http://static.bbci.co.uk/bbcdotcom/0.3.131/style/3pt_ads.css", "http://static.bbci.co.uk/frameworks/pulsesurvey/0.7.0/style/pulse.css", "http://static.bbci.co.uk/wwhomepage-3.5/1.0.48/css/bundles/main.css", "http://www.avg.com/stc/tpl/crp/css/all-stdfull.css", "http://www.avg.com/stc/tpl/crp/css/custom/2012/homepage.css", "http://i.media-imdb.com/images/SF9c443cfc6c82b9c4c51e20e46def8e03/css/min/consumerhome.css", "http://i.media-imdb.com/images/SF52e6b9f11712d3ec552179f6c869b63a/css2/site/consumer-navbar-no-js.css", "http://us-st.xhamster.com/css/style6.css?v=52", "http://us-st.xhamster.com/css/hRotator.css?v=15", "http://us-st.xhamster.com/css/modal.css?v=16", "http://static.fc2.com/share/css/common.css", "http://static.fc2.com/share/fc2parts/css/share.css", "http://static.fc2.com/fc2com/css/fc2com_default.css?0801", "http://static-origin.fc2.com/fc2com/css/sp.css", "http://static.xvideos.com/v2/css/xv-styles.css", "http://css.tudouui.com/skin/__g/__g_158.css", "http://css.tudouui.com/skin/index/v3/v_1.css", "http://static.youku.com/v1.0.0789/index/css/youku.css", "http://img0.livejasmin.com/styles/jasmin/global.css?cno=762d", "http://img3.livejasmin.com/styles/jasmin/index.css?cno=951a", "http://img1.livejasmin.com/styles/en.css?cno=951a", "/CMSPages/GetCSS.aspx?stylesheetname=Corporate", "/CMSPages/GetCSS.aspx?stylesheetname=CorporateFonts", "http://a.tbcdn.cn/??p/mall/base/global-v2.css?t=2012071120120111.css", "http://a.tbcdn.cn/p/mall/fp/m2011q3/??common.css,header-v2.css,top_screen.css,category.css,floor.css,btm_cate.css?t=20120503.css", "http://www.zedo.com/wp-content/themes/organic_verbage/style.css", "http://www.zedo.com/wp-includes/js/thickbox/thickbox.css?ver=3.4.1", "http://www.zedo.com/wp-content/plugins/flexslider/js/flexslider.css?ver=3.4.1", "http://www.zedo.com/wp-content/plugins/jquery-collapse-o-matic/style.css?ver=1.5.1", "http://www.zedo.com/wp-content/plugins/social-media-mashup/icons.css?ver=3.4.1", "http://www.zedo.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=3.2.1", "http://www.zedo.com/wp-content/plugins/dynamic-to-top/css/dynamic-to-top-css.php?ver=3.3.1", "http://www.zedo.com/wp-content/plugins/flexi-quote-rotator/styles/narrow-plain.css", "http://fonts.googleapis.com/css?family=Abel", "http://portal.aolcdn.com/p5/_v70.9/css/maing.css", "http://portal.aolcdn.com/p5/skin/_v51/goldfish.css", "http://s0.hao123img.com/s/hao123_C4HggHQbyWE.css", "http://stg.odnoklassniki.ru/res/batch/css/2b499c54/core.css", "http://stg.odnoklassniki.ru/res/batch/css/69ffe96b/main.css", "http://cdn1.static.pornhub.phncdn.com/css/common.css?cache=2012081001", "http://cdn1.static.pornhub.phncdn.com/css/community.css?cache=004", "http://cdn1.static.pornhub.phncdn.com/css/campaign.css?cache=2012080601", "http://z.cdn.turner.com/cnn/tmpl_asset/static/www_homepage/1444/css/hplib-min.css", "css/app.css", null, "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/opt/css/normal/common.css?v=1207111500", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/opt/css/normal/layout.css?v=1207111500", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/opt/css/normal/sidecolumn.css?v=1207111500", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/beta/css/liquid/api.css?v=1207111500", "/com/inc/home/20080930/beta/css/liquid/myrakuten_dpgs.css", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/opt/css/normal/leftcolumn.css?v=1207111500", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/opt/css/normal/header.css?v=1207111500", "/com/inc/home/20080930/opt/css/normal/footer.css", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/beta/css/liquid/ipad.css", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/opt/css/normal/genre.css?v=1207111500", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/opt/css/normal/supersale.css?v=1207111500", "/com/inc/home/20080930/beta/css/liquid/rakuten_membership.css", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/beta/css/noscript/set.css?v=1207111500", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/beta/css/liquid/suggest-2.0.1.css?v=1204231500", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/beta/css/liquid/liquid_banner.css?v=1203011138", "http://a.ichiba.jp.rakuten-static.com/com/inc/home/20080930/beta/css/liquid/area_announce.css?v=1203011138", "http://ir.ebaystatic.com/v4css/z/y4/otkowzrfsi5stmdeqp53esxtp.css#Finding_BaseDS2_e785i_Ear_de_DE", "http://ir.ebaystatic.com/v4css/z/2t/fbo2rtcfqu15rff3nzwhesfhy.css#GH-ZAM_RedesignEbay_e785i_Ear_de_DE", "http://ir.ebaystatic.com/v4css/z/y2/0cfbgwlon21blaawhpstgxpk4.css#Finding_eBayHomePage_e785i_Ear_de_DE", "http://style.aliunicorn.com/4v/home/home|4v/countryFlag_s|4v/searchweb/new_search_bar_v1|v_20f0ea18f7561_0.css", "http://0.tqn.com/0/css/hp.20.css", "http://s.huffpost.com/assets/css.php?f=verticals%2Fhomepage.css%2Cfrontpage.css%2Cfonts%2Fopensans-condbold%2Fstylesheet.css%2Ctopnav_new%2Fall_pages.css%2Ctopnav_new%2Ftop_nav.css%2Ctopnav_new%2Fmodule.edition_nav.css%2Cbasic.css%2Cverticals%2Fcolor_scheme.css%2Cadd%2Ffront.css%2Cbuttons.css&v87705", "http://s.huffpost.com/assets/css.php?f=most_popular.css%2Ccommercial.css%2Chuff_promo.css%2Csnp_friends.css%2Csnn-header.css%2Chp_modules%2Fmodule.splash_slideshow.css%2Chp_modules%2Fmodule.apps_feeds.css%2Chufflists.css%2Csignup_modal.css%2Cdirect_message.css%2Cbadges_v2.css%2Chp_modules%2Ffacebook.css&v87591", "http://s.huffpost.com/assets/css.php?f=user_levels.css%2Ctwitter_splash.css%2Cbing.css%2Cgrouping.css%2Cmodal_window.css%2Chp_modules%2Fmodule.bubble.css&v87240", "http://s.huffpost.com/assets/css.php?f=email_share.css%2Csocial-navbar.css%2Chp_modules%2Fmodule.bubble-tags.css%2Chp_modules%2Fmodule.fb_like_button.css%2Csearch_autocomplete.css%2Cread-edge.css&v87284", "http://s.huffpost.com/assets/css.php?f=hp_modules%2Fmodule.splash_slideshow_light.css", "http://e.huffpost.com/olympics/assets/splash_banner.css?2e424070cc320e5746734efaaa15688779e58af2", "http://e.huffpost.com/olympics/assets/right_rail.css?2e424070cc320e5746734efaaa15688779e58af2", "//static.thepiratebay.se/css5/main.css", "http://ak2.home.mywebsearch.com/unified.css?flv=nomultisearch,icons-small,i18ln&r=54.0&env=prod&tt=smallicons&brType=other", "http://img.chinaz.com/templates/chinaz/css/style.css?v=20120717", "http://img.chinaz.com/max-templates/passport/styles/topbar.css", "http://cdn.mediafire.com/css/mfv3_81744.php?ver=nonssl", "http://cdn.mediafire.com/css/mfv4_81744.php?ver=nonssl", "https://fonts.googleapis.com/css?family=Open+Sans:800,400,700", "http://z-ecx.images-amazon.com/images/G/01/nav2/gamma/websiteGridCSS/websiteGridCSS-websiteGridCSS-10164._V1_.css", "http://z-ecx.images-amazon.com/images/G/01/browser-scripts/de-site-wide-css/site-wide-9442945286._V1_.css", "http://z-ecx.images-amazon.com/images/G/01/s9-campaigns/s9-widget._V143214364_.css", "http://z-ecx.images-amazon.com/images/G/01/s9-campaigns/s9-widget._V143214364_.css", "http://stat100.ameba.jp/common_style/css/common/common.css", "http://stat100.ameba.jp/blog/css/blog_top/ameblo_top_20120306.css", "http://ir.ebaystatic.com/v4css/z/en/y0eelaswyq2ctcbhtewx35vmq.css#Finding_BaseDS2_e785i_Ear_en_GB", "http://ir.ebaystatic.com/v4css/z/uv/2iozqakz3e3khi2tlal5eugcb.css#Finding_eBayHomePageGrid_e785i_Ear_en_GB", "http://gh.ebaystatic.com/header/css/all.min?combo=53&ds=3&siteid=3&factor=REFRESHER&rvr=51", "http://img2.wsimg.com/shared/css/1/styles_20120113.min.css", "http://adf.ly/css/styles.css?version=1.4", "http://jsuol.com/h/2011/sprites-dinamicos.css", "http://a.espncdn.com/combiner/c?v=201207021039&css=global_reset.r1.css,base.r236.css,modules.r453.css,global_header.r42.css,modules/global_nav.r52.css,modules/insider_enhanced.r1.css,modules/mem/mem.r8.css,modules/mem/mem_espn360.r4.css,modules/facebook/button.r2.css,modules/btn-toggle-tablet.css,sprites/sn_icon_sprite.r2.css,/espn/espn/styles/frontpage_scoreboard_10,universal_overlay/universal_overlay.css,universal_overlay/media_overlay.css,universal_overlay/video_overlay.css,universal_overlay/photo_overlay.css,universal_overlay/dyk_overlay.css", "http://a.espncdn.com/combiner/c/20120509325?css=sprites/teamlogos.r9.css", "http://a.espncdn.com/prod/styles/modules/mem/watchmem-default.css", "https://signup.netflix.com/css/include?f=core;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|shared;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|header_navigation;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|setLanguagePrefMenu;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|footer;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|registration_panel;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|login_pages;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|signup_flow;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|", "https://signup.netflix.com/css/include?f=HOME;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|", "https://signup.netflix.com/css/include?f=overview_block_north_america;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|", "https://signup.netflix.com/css/include?f=simpler_hp_testing;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|", "https://signup.netflix.com/css/include?f=simpler_hp_testing_not_registered;WEB_CSS;088b13d61adfc4b14053f823d61dc44f|", "https://a.alipayobjects.com/al/common.homeindex-1.0.css", "http://cdn.sstatic.net/stackoverflow/all.css?v=960e8fd34649", "/css/style.css?v=c7f5885a", "/css/layout.css?v=7a12253a", "/css/autocomplete/jquery-ui-1.8.16.custom.css?v=c7f5885a", "/css/bears_0.css?v=52fc6ba6", "/css/skin.php?sid=37&picurl=0000037.jpg", "http://z-ecx.images-amazon.com/images/G/01/nav2/gamma/websiteGridCSS/websiteGridCSS-websiteGridCSS-10164._V1_.css", "http://z-ecx.images-amazon.com/images/G/01/browser-scripts/jp-site-wide-css/site-wide-5811964338._V1_.css", "http://z-ecx.images-amazon.com/images/G/01/s9-campaigns/s9-widget._V143214364_.css", "http://z-ecx.images-amazon.com/images/G/01/s9-campaigns/s9-widget._V143214364_.css", "http://z-ak.images-amazon.com/images/G/09/zeitgeist/static/css/zeitgeist-chart.2._V134297718_.css", "http://z-ecx.images-amazon.com/images/G/01/s9-campaigns/s9-widget._V143214364_.css", "http://static.4shared.com/css/ui/elements.css?ver=2428399622", "http://static.4shared.com/js/bundles/includeNewHeaderStylesAndScripts.css?ver=1010739718", "http://static.4shared.com/js/bundles/indexnew2.css?ver=4178786828", "http://static.4shared.com/auth-popup.css?ver=796738734", "http://static.4shared.com/css/tipTip.css?ver=3179792454", "//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=latin", "../doubleclick/css/default.css", "http://s.glbimg.com/en/ho/static/CACHE/css/561825b84a26.css", "http://s.glbimg.com/en/ho/o/home/desktop/opec15.css", "http://cdn1.static.youporn.phncdn.com/cb/youpornwebfront/css/style.css?v=2.18", "http://s.imgur.com/min/global_css?1344622450", "http://s.imgur.com/min/index_css?1344548157", "http://s.wordpress.org/style/iphone.css", "//d36xtkk24g8jdx.cloudfront.net/bluebar/9eb277e/cache/public/home.css", "http://static1.dmcdn.net/css/gen/widget/pack/baseskin-prod.css.va98959a6df99d7a74", "http://wigetmedia.com/static/css/reset.css", "http://wigetmedia.com/static/css/main.css", "http://wigetmedia.com/static/css/home.css", "http://wigetmedia.com/static/javascript/fancybox/jquery.fancybox-1.3.4.css", "http://asset2.cbsistatic.com/cnwk.1d/css/rb/Build/global/base.css?v=2", "http://asset3.cbsistatic.com/cnwk.1d/css/rb/Build/global/site1.css", "http://asset1.cbsistatic.com/cnwk.1d/css/rb/Build/2000/2000.1.0.css?v=2", "http://css.nyt.com/css/0.1/screen/build/homepage/styles.css?v=20120119", "http://css.nyt.com/css/0.1/print/styles.css", "http://graphics8.nytimes.com/css/0.1/screen/slideshow/modules/slidingGallery.css", "http://graphics8.nytimes.com/packages/css/multimedia/bundles/projects/2012/HPLiveDebateFlex.css", "http://s.xnimg.cn/a42349/n/apps/login/v6/unbuffered-all-min.css", "http://z-ecx.images-amazon.com/images/G/01/nav2/gamma/websiteGridCSS/websiteGridCSS-websiteGridCSS-10164._V1_.css", "http://z-ecx.images-amazon.com/images/G/01/browser-scripts/uk-site-wide-css/site-wide-5559842069._V1_.css", "http://z-ecx.images-amazon.com/images/G/01/s9-campaigns/s9-widget._V143214364_.css", "http://z-ecx.images-amazon.com/images/G/01/s9-campaigns/s9-widget._V143214364_.css", "/styles/template.css", "/styles/dark.css", "/styles/typography.css", "/styles/system.css", "/styles/general.css", "/styles/rokmoomenu.css", "/styles/theme.css", "/styles/rokbox-style.css", "http://l-stat.livejournal.com/??contextualhover.css,esn.css,lj_base.css,home.css,statistics/statistics.css,widgets/promotext.css,widgets/journalspotlight.css,widgets/recentcomments.css,widgets/widget-layout.css,widgets/search-journals.css,widgets/news.css,widgets/marqueefeatures.css,widgets/photos2homepage.css,widgets/potd.css,widgets/vgifts.css,widgets/featuredstyles.css,widgets/settingprod.css,widgets/publicstats.css,widgets/ljtoday.css,widgets/waves.css,widgets/charity.css,widgets/featuredcommunities.css,lj_base-app.css,horizon/screen.css,horizon/layout.css,widget.css,horizon/un_rblocks.css,ad_base.css,statistics/un_stats.css,horizon/loggedout.css?v=1344780611", "http://d.imwx.com/cssRollup?rollup=/cssfiles/wx-reset.css,/cssfiles/wx-text.css,/cssfiles/wx-common.css,/cssfiles/wx-icons.css,/cssfiles/layout/wx-layout.css,/cssfiles/layout/wx-theming.css,/cssfiles/modules/wx-modules.css", "http://d.imwx.com/cssRollup?rollup=/cssfiles/layout/wx-header.css,/cssfiles/modules/wx-social-share.css,/cssfiles/layout/plugins/wx-breaking-now.css,/cssfiles/layout/plugins/wx-breaking-now-custom.css,/cssfiles/modules/media/wx-media-player.css,/cssfiles/modules/media/wx-playlist.css,/cssfiles/modules/media/wx-linker-slideshow.css,/cssfiles/modules/weather/wx-weather.css,/cssfiles/modules/wx-links.css,/cssfiles/modules/articles/wx-article-title.css,/cssfiles/modules/media/wx-video-player.css,/cssfiles/modules/plugins/wx-modules-custom.css,/cssfiles/layout/wx-footer.css", "cssv3/index.css", "http://img3.douban.com/css/core/packed__init_2923304827.css", "http://img3.douban.com/css/sns/fp/packed_old9233694593.css", "http://scripts.dailymail.co.uk/static/bundles/all--68-build-123.css", "/coloursCss/colours-68-build-123.css", "http://scripts.dailymail.co.uk/static/bundles/print--68-build-123.css"];
    css.unshift("http://cdn1.static.pornhub.phncdn.com/css/common.css?cache=2012081001");
    css_index = 0;
    update_css = function() {
      $("#hostile_css").attr("href", css[css_index]);
      $("#css_url").html("" + css[css_index]);
      return $("#css_summary").html("" + (css_index + 1) + " of " + css.length);
    };
    $("#hostile").click(function() {
      var code;

      $(".arena_section").show();
      $("#prev_css").show();
      $("#next_css").show();
      update_css();
      code = $("#code").val();
      return embed_code(code);
    });
    prev_css = function() {
      if (css_index > 0) {
        css_index -= 1;
        return update_css();
      }
    };
    next_css = function() {
      if (css_index < css.length) {
        css_index += 1;
        return update_css();
      }
    };
    $("#prev_css").click(function() {
      return prev_css();
    });
    $("#next_css").click(function() {
      return next_css();
    });
    return $("body").keydown(function(e) {
      if (e.keyCode === 37) {
        return prev_css();
      } else if (e.keyCode === 39) {
        return next_css();
      }
    });
  });

}).call(this);
