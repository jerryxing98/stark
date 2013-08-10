




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jQuery-EasyTabs/lib/jquery.easytabs.js at master · JangoSteve/jQuery-EasyTabs</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="fe4.rs.github.com">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="xhr-socket" href="/_sockets" />
    
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="5007349" name="octolytics-actor-id" /><meta content="jerryxing98" name="octolytics-actor-login" /><meta content="c0ca79676ead78cc7b771c7a01ae57cd24bf64ae36d152750452441f3b858f42" name="octolytics-actor-hash" />

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="eLI8PoeFdWzN0X1FVRWvpPzcXcsFwglsC4DjsWLgwxk=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-697b506a0b29d9891d9591c88950d8c4ab0c7c0b.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-d3cdff01428383b2670dce9b781434be7c9d37e8.css" media="all" rel="stylesheet" type="text/css" />
    


      <script src="https://github.global.ssl.fastly.net/assets/frameworks-eae23340ab2a6ba722166712e699c87aaf60ad8f.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-b0ad47c951a9fdf955b77604a11c825338753c4b.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="777d3b86a6e60b4eb683bc31c74b75a4">

        <link data-pjax-transient rel='permalink' href='/JangoSteve/jQuery-EasyTabs/blob/8d2e68d96ee69e3f201e4cf04d2144afe9d78200/lib/jquery.easytabs.js'>
  <meta property="og:title" content="jQuery-EasyTabs"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/JangoSteve/jQuery-EasyTabs"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="jQuery-EasyTabs - Easy and flexible jQuery tabbed functionality without all the styling."/>

  <meta name="description" content="jQuery-EasyTabs - Easy and flexible jQuery tabbed functionality without all the styling." />

  <meta content="93607" name="octolytics-dimension-user_id" /><meta content="JangoSteve" name="octolytics-dimension-user_login" /><meta content="858349" name="octolytics-dimension-repository_id" /><meta content="JangoSteve/jQuery-EasyTabs" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="858349" name="octolytics-dimension-repository_network_root_id" /><meta content="JangoSteve/jQuery-EasyTabs" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/JangoSteve/jQuery-EasyTabs/commits/master.atom" rel="alternate" title="Recent Commits to jQuery-EasyTabs:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob windows vis-public env-production ">

    <div class="wrapper">
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/">
  <span class="mega-octicon octicon-mark-github"></span>
</a>

    <div class="divider-vertical"></div>

    
  <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have unread notifications">
    <span class="mail-status unread"></span>
  </a>
  <div class="divider-vertical"></div>


      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="jerryxing98"
      data-repo="JangoSteve/jQuery-EasyTabs"
      data-branch="master"
      data-sha="fc0ee765bda169943c390239dbe3d16073ef200c"
  >

    <input type="hidden" name="nwo" value="JangoSteve/jQuery-EasyTabs" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
            <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

  

    <ul id="user-links">
      <li>
        <a href="/jerryxing98" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/5e78ee37f34e6cddd9a87d8ab7be63d2?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> jerryxing98
        </a>
      </li>

        <li>
          <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo" aria-label="Create a new repo">
            <span class="octicon octicon-repo-create"></span>
          </a>
        </li>

        <li>
          <a href="/settings/profile" id="account_settings"
            class="tooltipped downwards"
            aria-label="Account settings (You have no verified emails)"
            title="Account settings (You have no verified emails)">
            <span class="octicon octicon-tools"></span>
          </a>
            <span class="settings-warning">!</span>
        </li>
        <li>
          <a class="tooltipped downwards" href="/logout" data-method="post" id="logout" title="Sign out" aria-label="Sign out">
            <span class="octicon octicon-log-out"></span>
          </a>
        </li>

    </ul>


<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo-create"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>



    <li class="section-title">
      <span title="JangoSteve/jQuery-EasyTabs">This repository</span>
    </li>
    <li>
      <a href="/JangoSteve/jQuery-EasyTabs/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
    </li>
</ul>

</div>


    
  </div>
</div>

      

      

<div class="flash-global flash-warn">
<div class="container">

    <h2>
      You don't have any verified emails.  We recommend <a href="https://github.com/settings/emails">verifying</a> at least one email.
    </h2>
    <p>
      Email verification helps our support team help you in case you have any email issues or lose your password.
    </p>












</div>
</div>



          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="eLI8PoeFdWzN0X1FVRWvpPzcXcsFwglsC4DjsWLgwxk=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="858349" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/JangoSteve/jQuery-EasyTabs/watchers">
          21
        </a>
      <span class="minibutton select-menu-button with-count js-menu-target">
        <span class="js-select-button">
          <span class="octicon octicon-eye-watch"></span>
          Watch
        </span>
      </span>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content">
          <div class="select-menu-header">
            <span class="select-menu-title">Notification status</span>
            <span class="octicon octicon-remove-close js-menu-close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container">

            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">You only receive notifications for discussions in which you participate or are @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-watch"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">You receive notifications for all discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye-unwatch"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">You do not receive any notifications for discussions in this repository.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
  
<div class="js-toggler-container js-social-container starring-container ">
  <a href="/JangoSteve/jQuery-EasyTabs/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/JangoSteve/jQuery-EasyTabs/star" class="minibutton with-count js-toggler-target star-button unstarred upwards " title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/JangoSteve/jQuery-EasyTabs/stargazers">225</a>
</div>

  </li>


        <li>
          <a href="/JangoSteve/jQuery-EasyTabs/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/JangoSteve/jQuery-EasyTabs/network" class="social-count">82</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/JangoSteve" class="url fn" itemprop="url" rel="author"><span itemprop="title">JangoSteve</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/JangoSteve/jQuery-EasyTabs" class="js-current-repository js-repo-home-link">jQuery-EasyTabs</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/JangoSteve/jQuery-EasyTabs" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /JangoSteve/jQuery-EasyTabs">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/JangoSteve/jQuery-EasyTabs/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /JangoSteve/jQuery-EasyTabs/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>41</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/JangoSteve/jQuery-EasyTabs/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /JangoSteve/jQuery-EasyTabs/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>0</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/JangoSteve/jQuery-EasyTabs/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /JangoSteve/jQuery-EasyTabs/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/JangoSteve/jQuery-EasyTabs/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /JangoSteve/jQuery-EasyTabs/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/JangoSteve/jQuery-EasyTabs/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /JangoSteve/jQuery-EasyTabs/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/JangoSteve/jQuery-EasyTabs/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /JangoSteve/jQuery-EasyTabs/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    </ul>

  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/JangoSteve/jQuery-EasyTabs.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/JangoSteve/jQuery-EasyTabs.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:JangoSteve/jQuery-EasyTabs.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:JangoSteve/jQuery-EasyTabs.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/JangoSteve/jQuery-EasyTabs" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/JangoSteve/jQuery-EasyTabs" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>



<p class="clone-options">You can clone with
    <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
    <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
    <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>,
  and <a href="https://help.github.com/articles/which-remote-url-should-i-use">other methods.</a>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/JangoSteve/jQuery-EasyTabs/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:13279d220544cbe0b81b1cdc1d1dc891 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:13279d220544cbe0b81b1cdc1d1dc891 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/JangoSteve/jQuery-EasyTabs/find/master" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/gh-pages/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="gh-pages" data-skip-pjax="true" rel="nofollow" title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/master/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v3.2.0/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.2.0" data-skip-pjax="true" rel="nofollow" title="v3.2.0">v3.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v3.1.1/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1.1" data-skip-pjax="true" rel="nofollow" title="v3.1.1">v3.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v3.1/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.1" data-skip-pjax="true" rel="nofollow" title="v3.1">v3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v3.0/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v3.0" data-skip-pjax="true" rel="nofollow" title="v3.0">v3.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.3.4/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.4" data-skip-pjax="true" rel="nofollow" title="v2.3.4">v2.3.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.3.3/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.3" data-skip-pjax="true" rel="nofollow" title="v2.3.3">v2.3.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.3.2/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.2" data-skip-pjax="true" rel="nofollow" title="v2.3.2">v2.3.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.3.1/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3.1" data-skip-pjax="true" rel="nofollow" title="v2.3.1">v2.3.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.3/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.3" data-skip-pjax="true" rel="nofollow" title="v2.3">v2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.2.2/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.2" data-skip-pjax="true" rel="nofollow" title="v2.2.2">v2.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.2.1/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2.1" data-skip-pjax="true" rel="nofollow" title="v2.2.1">v2.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.2/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.2" data-skip-pjax="true" rel="nofollow" title="v2.2">v2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.1.2/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.2" data-skip-pjax="true" rel="nofollow" title="v2.1.2">v2.1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.1.1/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.1" data-skip-pjax="true" rel="nofollow" title="v2.1.1">v2.1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.1.0/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.1.0" data-skip-pjax="true" rel="nofollow" title="v2.1.0">v2.1.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.0.2/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.2" data-skip-pjax="true" rel="nofollow" title="v2.0.2">v2.0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.0.1/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0.1" data-skip-pjax="true" rel="nofollow" title="v2.0.1">v2.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/JangoSteve/jQuery-EasyTabs/blob/v2.0/lib/jquery.easytabs.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v2.0" data-skip-pjax="true" rel="nofollow" title="v2.0">v2.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/JangoSteve/jQuery-EasyTabs" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jQuery-EasyTabs</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/JangoSteve/jQuery-EasyTabs/tree/master/lib" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">lib</span></a></span><span class="separator"> / </span><strong class="final-path">jquery.easytabs.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="lib/jquery.easytabs.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/ca46a3d7ca39aae7b2b27526d0ad64f0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/JangoSteve" rel="author">JangoSteve</a></span>
    <time class="js-relative-date" datetime="2013-05-09T14:50:09-07:00" title="2013-05-09 14:50:09">May 09, 2013</time>
    <div class="commit-title">
        <a href="/JangoSteve/jQuery-EasyTabs/commit/b04c915ed8d429bbb9fcab37e717b68793a792b0" class="message" data-pjax="true" title="Version 3.2.0">Version 3.2.0</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>4</strong> contributors</a></p>
          <a class="avatar tooltipped downwards" title="JangoSteve" href="/JangoSteve/jQuery-EasyTabs/commits/master/lib/jquery.easytabs.js?author=JangoSteve"><img height="20" src="https://secure.gravatar.com/avatar/ca46a3d7ca39aae7b2b27526d0ad64f0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="pascalBokBok" href="/JangoSteve/jQuery-EasyTabs/commits/master/lib/jquery.easytabs.js?author=pascalBokBok"><img height="20" src="https://secure.gravatar.com/avatar/ed4a46564e1f2c0fdaed9332a024a52a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="dcabasson" href="/JangoSteve/jQuery-EasyTabs/commits/master/lib/jquery.easytabs.js?author=dcabasson"><img height="20" src="https://secure.gravatar.com/avatar/621812a76095c7a2e30cd16295d84277?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>
    <a class="avatar tooltipped downwards" title="allspiritseve" href="/JangoSteve/jQuery-EasyTabs/commits/master/lib/jquery.easytabs.js?author=allspiritseve"><img height="20" src="https://secure.gravatar.com/avatar/0d292b1cb6d82f0208573cd428e1e94d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/ca46a3d7ca39aae7b2b27526d0ad64f0?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/JangoSteve">JangoSteve</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/ed4a46564e1f2c0fdaed9332a024a52a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/pascalBokBok">pascalBokBok</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/621812a76095c7a2e30cd16295d84277?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/dcabasson">dcabasson</a>
        </li>
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/0d292b1cb6d82f0208573cd428e1e94d?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/allspiritseve">allspiritseve</a>
        </li>
      </ul>
    </div>
  </div>


<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>705 lines (577 sloc)</span>
        <span>26.798 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
                <a class="minibutton tooltipped leftwards"
                   title="Clicking this button will automatically fork this project so you can edit the file"
                   href="/JangoSteve/jQuery-EasyTabs/edit/master/lib/jquery.easytabs.js"
                   data-method="post" rel="nofollow">Edit</a>
          <a href="/JangoSteve/jQuery-EasyTabs/raw/master/lib/jquery.easytabs.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/JangoSteve/jQuery-EasyTabs/blame/master/lib/jquery.easytabs.js" class="button minibutton ">Blame</a>
          <a href="/JangoSteve/jQuery-EasyTabs/commits/master/lib/jquery.easytabs.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon tooltipped downwards"
               href="/JangoSteve/jQuery-EasyTabs/delete/master/lib/jquery.easytabs.js"
               title="Fork this project and delete file" data-method="post" rel="nofollow">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
      <table class="file-code file-diff">
        <tr class="file-code-line">
          <td class="blob-line-nums">
            <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> * jQuery EasyTabs plugin 3.2.0</span></div><div class='line' id='LC3'><span class="cm"> *</span></div><div class='line' id='LC4'><span class="cm"> * Copyright (c) 2010-2011 Steve Schwartz (JangoSteve)</span></div><div class='line' id='LC5'><span class="cm"> *</span></div><div class='line' id='LC6'><span class="cm"> * Dual licensed under the MIT and GPL licenses:</span></div><div class='line' id='LC7'><span class="cm"> *   http://www.opensource.org/licenses/mit-license.php</span></div><div class='line' id='LC8'><span class="cm"> *   http://www.gnu.org/licenses/gpl.html</span></div><div class='line' id='LC9'><span class="cm"> *</span></div><div class='line' id='LC10'><span class="cm"> * Date: Thu May 09 17:30:00 2013 -0500</span></div><div class='line' id='LC11'><span class="cm"> */</span></div><div class='line' id='LC12'><span class="p">(</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC13'><br/></div><div class='line' id='LC14'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">easytabs</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">container</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC15'><br/></div><div class='line' id='LC16'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Attach to plugin anything that should be available via</span></div><div class='line' id='LC17'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the $container.data(&#39;easytabs&#39;) object</span></div><div class='line' id='LC18'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">plugin</span> <span class="o">=</span> <span class="k">this</span><span class="p">,</span></div><div class='line' id='LC19'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="nx">container</span><span class="p">),</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaults</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC22'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">animate</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC23'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">panelActiveClass</span><span class="o">:</span> <span class="s2">&quot;active&quot;</span><span class="p">,</span></div><div class='line' id='LC24'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tabActiveClass</span><span class="o">:</span> <span class="s2">&quot;active&quot;</span><span class="p">,</span></div><div class='line' id='LC25'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultTab</span><span class="o">:</span> <span class="s2">&quot;li:first-child&quot;</span><span class="p">,</span></div><div class='line' id='LC26'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">animationSpeed</span><span class="o">:</span> <span class="s2">&quot;normal&quot;</span><span class="p">,</span></div><div class='line' id='LC27'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tabs</span><span class="o">:</span> <span class="s2">&quot;&gt; ul &gt; li&quot;</span><span class="p">,</span></div><div class='line' id='LC28'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">updateHash</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC29'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cycle</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC30'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collapsible</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC31'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collapsedClass</span><span class="o">:</span> <span class="s2">&quot;collapsed&quot;</span><span class="p">,</span></div><div class='line' id='LC32'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collapsedByDefault</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC33'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uiTabs</span><span class="o">:</span> <span class="kc">false</span><span class="p">,</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transitionIn</span><span class="o">:</span> <span class="s1">&#39;fadeIn&#39;</span><span class="p">,</span></div><div class='line' id='LC35'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transitionOut</span><span class="o">:</span> <span class="s1">&#39;fadeOut&#39;</span><span class="p">,</span></div><div class='line' id='LC36'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transitionInEasing</span><span class="o">:</span> <span class="s1">&#39;swing&#39;</span><span class="p">,</span></div><div class='line' id='LC37'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transitionOutEasing</span><span class="o">:</span> <span class="s1">&#39;swing&#39;</span><span class="p">,</span></div><div class='line' id='LC38'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transitionCollapse</span><span class="o">:</span> <span class="s1">&#39;slideUp&#39;</span><span class="p">,</span></div><div class='line' id='LC39'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transitionUncollapse</span><span class="o">:</span> <span class="s1">&#39;slideDown&#39;</span><span class="p">,</span></div><div class='line' id='LC40'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transitionCollapseEasing</span><span class="o">:</span> <span class="s1">&#39;swing&#39;</span><span class="p">,</span></div><div class='line' id='LC41'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transitionUncollapseEasing</span><span class="o">:</span> <span class="s1">&#39;swing&#39;</span><span class="p">,</span></div><div class='line' id='LC42'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">containerClass</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC43'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tabsClass</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC44'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tabClass</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC45'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">panelClass</span><span class="o">:</span> <span class="s2">&quot;&quot;</span><span class="p">,</span></div><div class='line' id='LC46'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cache</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC47'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span><span class="o">:</span> <span class="s1">&#39;click&#39;</span><span class="p">,</span></div><div class='line' id='LC48'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">panelContext</span><span class="o">:</span> <span class="nx">$container</span></div><div class='line' id='LC49'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Internal instance variables</span></div><div class='line' id='LC52'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// (not available via easytabs object)</span></div><div class='line' id='LC53'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$defaultTab</span><span class="p">,</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$defaultTabLink</span><span class="p">,</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transitions</span><span class="p">,</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastHash</span><span class="p">,</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">skipUpdateToHash</span><span class="p">,</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">animationSpeeds</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fast</span><span class="o">:</span> <span class="mi">200</span><span class="p">,</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">normal</span><span class="o">:</span> <span class="mi">400</span><span class="p">,</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">slow</span><span class="o">:</span> <span class="mi">600</span></div><div class='line' id='LC62'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC63'><br/></div><div class='line' id='LC64'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Shorthand variable so that we don&#39;t need to call</span></div><div class='line' id='LC65'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// plugin.settings throughout the plugin code</span></div><div class='line' id='LC66'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">;</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// =============================================================</span></div><div class='line' id='LC69'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Functions available via easytabs object</span></div><div class='line' id='LC70'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// =============================================================</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">init</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC73'><br/></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">settings</span> <span class="o">=</span> <span class="nx">settings</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">({},</span> <span class="nx">defaults</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">bind_str</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">event</span><span class="o">+</span><span class="s2">&quot;.easytabs&quot;</span><span class="p">;</span></div><div class='line' id='LC76'><br/></div><div class='line' id='LC77'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add jQuery UI&#39;s crazy class names to markup,</span></div><div class='line' id='LC78'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// so that markup will match theme CSS</span></div><div class='line' id='LC79'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">uiTabs</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC80'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span> <span class="o">=</span> <span class="s1">&#39;ui-tabs-selected&#39;</span><span class="p">;</span></div><div class='line' id='LC81'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">containerClass</span> <span class="o">=</span> <span class="s1">&#39;ui-tabs ui-widget ui-widget-content ui-corner-all&#39;</span><span class="p">;</span></div><div class='line' id='LC82'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">tabsClass</span> <span class="o">=</span> <span class="s1">&#39;ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all&#39;</span><span class="p">;</span></div><div class='line' id='LC83'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">tabClass</span> <span class="o">=</span> <span class="s1">&#39;ui-state-default ui-corner-top&#39;</span><span class="p">;</span></div><div class='line' id='LC84'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">panelClass</span> <span class="o">=</span> <span class="s1">&#39;ui-tabs-panel ui-widget-content ui-corner-bottom&#39;</span><span class="p">;</span></div><div class='line' id='LC85'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If collapsible is true and defaultTab specified, assume user wants defaultTab showing (not collapsed)</span></div><div class='line' id='LC88'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">collapsible</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">defaultTab</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">options</span><span class="p">.</span><span class="nx">collpasedByDefault</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedByDefault</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC90'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Convert &#39;normal&#39;, &#39;fast&#39;, and &#39;slow&#39; animation speed settings to their respective speed in milliseconds</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="k">typeof</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">animationSpeed</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">animationSpeed</span> <span class="o">=</span> <span class="nx">animationSpeeds</span><span class="p">[</span><span class="nx">settings</span><span class="p">.</span><span class="nx">animationSpeed</span><span class="p">];</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC96'><br/></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="s1">&#39;a.anchor&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">().</span><span class="nx">prependTo</span><span class="p">(</span><span class="s1">&#39;body&#39;</span><span class="p">);</span></div><div class='line' id='LC98'><br/></div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Store easytabs object on container so we can easily set</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// properties throughout</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">,</span> <span class="p">{});</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">setTransitions</span><span class="p">();</span></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">getTabs</span><span class="p">();</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">addClasses</span><span class="p">();</span></div><div class='line' id='LC108'><br/></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setDefaultTab</span><span class="p">();</span></div><div class='line' id='LC110'><br/></div><div class='line' id='LC111'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">bindToTabClicks</span><span class="p">();</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initHashChange</span><span class="p">();</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">initCycle</span><span class="p">();</span></div><div class='line' id='LC116'><br/></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Append data-easytabs HTML attribute to make easy to query for</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// easytabs instances via CSS pseudo-selector</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;data-easytabs&#39;</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC121'><br/></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set transitions for switching between tabs based on options.</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Could be used to update transitions if settings are changes.</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">setTransitions</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">transitions</span> <span class="o">=</span> <span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">animate</span> <span class="p">)</span> <span class="o">?</span> <span class="p">{</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">show</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionIn</span><span class="p">,</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hide</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionOut</span><span class="p">,</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">speed</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">animationSpeed</span><span class="p">,</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collapse</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionCollapse</span><span class="p">,</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uncollapse</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionUncollapse</span><span class="p">,</span></div><div class='line' id='LC131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">halfSpeed</span><span class="o">:</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">animationSpeed</span> <span class="o">/</span> <span class="mi">2</span></div><div class='line' id='LC132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="o">:</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">{</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">show</span><span class="o">:</span> <span class="s2">&quot;show&quot;</span><span class="p">,</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hide</span><span class="o">:</span> <span class="s2">&quot;hide&quot;</span><span class="p">,</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">speed</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">collapse</span><span class="o">:</span> <span class="s2">&quot;hide&quot;</span><span class="p">,</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">uncollapse</span><span class="o">:</span> <span class="s2">&quot;show&quot;</span><span class="p">,</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">halfSpeed</span><span class="o">:</span> <span class="mi">0</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC142'><br/></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Find and instantiate tabs and panels.</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Could be used to reset tab and panel collection if markup is</span></div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// modified.</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">getTabs</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$matchingPanel</span><span class="p">;</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Find the initial set of elements matching the setting.tabs</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// CSS selector within the container</span></div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span> <span class="o">=</span> <span class="nx">$container</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabs</span><span class="p">),</span></div><div class='line' id='LC152'><br/></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Instantiate panels as empty jquery object</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">panels</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(),</span></div><div class='line' id='LC155'><br/></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$tab</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$a</span> <span class="o">=</span> <span class="nx">$tab</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">),</span></div><div class='line' id='LC159'><br/></div><div class='line' id='LC160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// targetId is the ID of the panel, which is either the</span></div><div class='line' id='LC161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `href` attribute for non-ajax tabs, or in the</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// `data-target` attribute for ajax tabs since the `href` is</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the ajax URL</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">targetId</span> <span class="o">=</span> <span class="nx">$tab</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s1">&#39;a&#39;</span><span class="p">).</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;target&#39;</span><span class="p">);</span></div><div class='line' id='LC165'><br/></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tab</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">,</span> <span class="p">{});</span></div><div class='line' id='LC167'><br/></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If the tab has a `data-target` attribute, and is thus an ajax tab</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">targetId</span> <span class="o">!==</span> <span class="kc">undefined</span> <span class="o">&amp;&amp;</span> <span class="nx">targetId</span> <span class="o">!==</span> <span class="kc">null</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tab</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">ajax</span> <span class="o">=</span> <span class="nx">$a</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">);</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">targetId</span> <span class="o">=</span> <span class="nx">$a</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;href&#39;</span><span class="p">);</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">targetId</span> <span class="o">=</span> <span class="nx">targetId</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/#([^\?]+)/</span><span class="p">)[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC175'><br/></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$matchingPanel</span> <span class="o">=</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">panelContext</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;#&quot;</span> <span class="o">+</span> <span class="nx">targetId</span><span class="p">);</span></div><div class='line' id='LC177'><br/></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If tab has a matching panel, add it to panels</span></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">$matchingPanel</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC180'><br/></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Store panel height before hiding</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$matchingPanel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">position</span><span class="o">:</span> <span class="nx">$matchingPanel</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;position&#39;</span><span class="p">),</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visibility</span><span class="o">:</span> <span class="nx">$matchingPanel</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;visibility&#39;</span><span class="p">)</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC186'><br/></div><div class='line' id='LC187'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Don&#39;t hide panel if it&#39;s active (allows `getTabs` to be called manually to re-instantiate tab collection)</span></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$matchingPanel</span><span class="p">.</span><span class="nx">not</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">panelActiveClass</span><span class="p">).</span><span class="nx">hide</span><span class="p">();</span></div><div class='line' id='LC189'><br/></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">panels</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">panels</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="nx">$matchingPanel</span><span class="p">);</span></div><div class='line' id='LC191'><br/></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tab</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">panel</span> <span class="o">=</span> <span class="nx">$matchingPanel</span><span class="p">;</span></div><div class='line' id='LC193'><br/></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Otherwise, remove tab from tabs collection</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">not</span><span class="p">(</span><span class="nx">$tab</span><span class="p">);</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="s1">&#39;console&#39;</span> <span class="k">in</span> <span class="nb">window</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">console</span><span class="p">.</span><span class="nx">warn</span><span class="p">(</span><span class="s1">&#39;Warning: tab without matching panel for selector \&#39;#&#39;</span> <span class="o">+</span> <span class="nx">targetId</span> <span class="o">+</span><span class="s1">&#39;\&#39; removed from set&#39;</span><span class="p">);</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC203'><br/></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Select tab and fire callback</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">selectTab</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">url</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">,</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hash</span> <span class="o">=</span> <span class="nx">url</span><span class="p">.</span><span class="nx">hash</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^[^\?]*/</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span> <span class="o">=</span> <span class="nx">$clicked</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">panel</span><span class="p">,</span></div><div class='line' id='LC209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">ajaxUrl</span> <span class="o">=</span> <span class="nx">$clicked</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">ajax</span><span class="p">;</span></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Tab is collapsible and active =&gt; toggle collapsed state</span></div><div class='line' id='LC212'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">collapsible</span> <span class="o">&amp;&amp;</span> <span class="o">!</span> <span class="nx">skipUpdateToHash</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="nx">$clicked</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">)</span> <span class="o">||</span> <span class="nx">$clicked</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">))</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC213'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">toggleTabCollapse</span><span class="p">(</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">ajaxUrl</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC214'><br/></div><div class='line' id='LC215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Tab is not active and panel is not active =&gt; select tab</span></div><div class='line' id='LC216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span><span class="p">(</span> <span class="o">!</span> <span class="nx">$clicked</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">)</span> <span class="o">||</span> <span class="o">!</span> <span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">panelActiveClass</span><span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC217'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">activateTab</span><span class="p">(</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">ajaxUrl</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC218'><br/></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Cache is disabled =&gt; reload (e.g reload an ajax tab).</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="o">!</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">cache</span> <span class="p">){</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">activateTab</span><span class="p">(</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">ajaxUrl</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC223'><br/></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC225'><br/></div><div class='line' id='LC226'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Toggle tab collapsed state and fire callback</span></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">toggleTabCollapse</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">ajaxUrl</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC228'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">panels</span><span class="p">.</span><span class="nx">stop</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC229'><br/></div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">fire</span><span class="p">(</span><span class="nx">$container</span><span class="p">,</span><span class="s2">&quot;easytabs:before&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">settings</span><span class="p">])</span> <span class="p">){</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s2">&quot;.&quot;</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">).</span><span class="nx">children</span><span class="p">().</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">);</span></div><div class='line' id='LC232'><br/></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If panel is collapsed, uncollapse it</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">$clicked</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">)</span> <span class="p">){</span></div><div class='line' id='LC235'><br/></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If ajax panel and not already cached</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">ajaxUrl</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">cache</span> <span class="o">||</span> <span class="o">!</span><span class="nx">$clicked</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">cached</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;easytabs:ajax:beforeSend&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">]);</span></div><div class='line' id='LC239'><br/></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="nx">ajaxUrl</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">){</span></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$clicked</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">cached</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;easytabs:ajax:complete&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">response</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">]);</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Update CSS classes of tab and panel</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$clicked</span><span class="p">.</span><span class="nx">parent</span><span class="p">()</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">)</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">)</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">children</span><span class="p">()</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">)</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">);</span></div><div class='line' id='LC253'><br/></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">panelActiveClass</span><span class="p">)</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="nx">transitions</span><span class="p">.</span><span class="nx">uncollapse</span><span class="p">](</span><span class="nx">transitions</span><span class="p">.</span><span class="nx">speed</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionUncollapseEasing</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;easytabs:midTransition&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">settings</span><span class="p">]);</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">callback</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="nx">callback</span><span class="p">();</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Otherwise, collapse it</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC263'><br/></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Update CSS classes of tab and panel</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$clicked</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">)</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">parent</span><span class="p">()</span></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">);</span></div><div class='line' id='LC268'><br/></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">panelActiveClass</span><span class="p">)</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="nx">transitions</span><span class="p">.</span><span class="nx">collapse</span><span class="p">](</span><span class="nx">transitions</span><span class="p">.</span><span class="nx">speed</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionCollapseEasing</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;easytabs:midTransition&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">settings</span><span class="p">]);</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">callback</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="nx">callback</span><span class="p">();</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'><br/></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Find tab with target panel matching value</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">matchTab</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">hash</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;[href=&#39;&quot;</span> <span class="o">+</span> <span class="nx">hash</span> <span class="o">+</span> <span class="s2">&quot;&#39;],[data-target=&#39;&quot;</span> <span class="o">+</span> <span class="nx">hash</span> <span class="o">+</span> <span class="s2">&quot;&#39;]&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">();</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC284'><br/></div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Find panel with `id` matching value</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">matchInPanel</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">hash</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span> <span class="nx">hash</span> <span class="o">&amp;&amp;</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">validId</span><span class="p">(</span><span class="nx">hash</span><span class="p">)</span> <span class="o">?</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">panels</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s1">&#39;:has(&#39;</span> <span class="o">+</span> <span class="nx">hash</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">).</span><span class="nx">first</span><span class="p">()</span> <span class="o">:</span> <span class="p">[]</span> <span class="p">);</span></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC289'><br/></div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Make sure hash is a valid id value (admittedly strict in that HTML5 allows almost anything without a space)</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// but jQuery has issues with such id values anyway, so we can afford to be strict here.</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">validId</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">id</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">id</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/</span><span class="p">);</span></div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC295'><br/></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Select matching tab when URL hash changes</span></div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">selectTabFromHashChange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^[^\?]*/</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tab</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">matchTab</span><span class="p">(</span><span class="nx">hash</span><span class="p">),</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$panel</span><span class="p">;</span></div><div class='line' id='LC301'><br/></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">updateHash</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC303'><br/></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If hash directly matches tab</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">$tab</span><span class="p">.</span><span class="nx">length</span> <span class="p">){</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">skipUpdateToHash</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">selectTab</span><span class="p">(</span> <span class="nx">$tab</span> <span class="p">);</span></div><div class='line' id='LC308'><br/></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$panel</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">matchInPanel</span><span class="p">(</span><span class="nx">hash</span><span class="p">);</span></div><div class='line' id='LC311'><br/></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If panel contains element matching hash</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">$panel</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hash</span> <span class="o">=</span> <span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="nx">$panel</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">);</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tab</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">matchTab</span><span class="p">(</span><span class="nx">hash</span><span class="p">);</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">skipUpdateToHash</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">selectTab</span><span class="p">(</span> <span class="nx">$tab</span> <span class="p">);</span></div><div class='line' id='LC318'><br/></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If default tab is not active...</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="o">!</span> <span class="nx">$defaultTab</span><span class="p">.</span><span class="nx">hasClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">cycle</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC321'><br/></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// ...and hash is blank or matches a parent of the tab container or</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if the last tab (before the hash updated) was one of the other tabs in this container.</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">hash</span> <span class="o">===</span> <span class="s1">&#39;&#39;</span> <span class="o">||</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">matchTab</span><span class="p">(</span><span class="nx">lastHash</span><span class="p">).</span><span class="nx">length</span> <span class="o">||</span> <span class="nx">$container</span><span class="p">.</span><span class="nx">closest</span><span class="p">(</span><span class="nx">hash</span><span class="p">).</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">skipUpdateToHash</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">selectTab</span><span class="p">(</span> <span class="nx">$defaultTabLink</span> <span class="p">);</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC332'><br/></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Cycle through tabs</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">cycleTabs</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">tabNumber</span><span class="p">){</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">cycle</span><span class="p">){</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tabNumber</span> <span class="o">=</span> <span class="nx">tabNumber</span> <span class="o">%</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tab</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">[</span><span class="nx">tabNumber</span><span class="p">]</span> <span class="p">).</span><span class="nx">children</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">();</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">skipUpdateToHash</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">selectTab</span><span class="p">(</span> <span class="nx">$tab</span><span class="p">,</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">cycleTabs</span><span class="p">(</span><span class="nx">tabNumber</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span> <span class="p">},</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">cycle</span><span class="p">);</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC344'><br/></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Convenient public methods</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">publicMethods</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">select</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">tabSelector</span><span class="p">){</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$tab</span><span class="p">;</span></div><div class='line' id='LC349'><br/></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Find tab container that matches selector (like &#39;li#tab-one&#39; which contains tab link)</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">$tab</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="nx">tabSelector</span><span class="p">)).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC352'><br/></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Find direct tab link that matches href (like &#39;a[href=&quot;#panel-1&quot;]&#39;)</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">$tab</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;a[href=&#39;&quot;</span> <span class="o">+</span> <span class="nx">tabSelector</span> <span class="o">+</span> <span class="s2">&quot;&#39;]&quot;</span><span class="p">)).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC355'><br/></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Find direct tab link that matches selector (like &#39;a#tab-1&#39;)</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">$tab</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;a&quot;</span> <span class="o">+</span> <span class="nx">tabSelector</span><span class="p">)).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC358'><br/></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Find direct tab link that matches data-target (lik &#39;a[data-target=&quot;#panel-1&quot;]&#39;)</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">$tab</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;[data-target=&#39;&quot;</span> <span class="o">+</span> <span class="nx">tabSelector</span> <span class="o">+</span> <span class="s2">&quot;&#39;]&quot;</span><span class="p">)).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC361'><br/></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Find direct tab link that ends in the matching href (like &#39;a[href$=&quot;#panel-1&quot;]&#39;, which would also match http://example.com/currentpage/#panel-1)</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="p">(</span><span class="nx">$tab</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;a[href$=&#39;&quot;</span> <span class="o">+</span> <span class="nx">tabSelector</span> <span class="o">+</span> <span class="s2">&quot;&#39;]&quot;</span><span class="p">)).</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC364'><br/></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s1">&#39;Tab \&#39;&#39;</span> <span class="o">+</span> <span class="nx">tabSelector</span> <span class="o">+</span> <span class="s1">&#39;\&#39; does not exist in tab set&#39;</span><span class="p">);</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Select the child tab link, since the first option finds the tab container (like &lt;li&gt;)</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$tab</span> <span class="o">=</span> <span class="nx">$tab</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">();</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">selectTab</span><span class="p">(</span><span class="nx">$tab</span><span class="p">);</span></div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC377'><br/></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// =============================================================</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Private functions</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// =============================================================</span></div><div class='line' id='LC381'><br/></div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Triggers an event on an element and returns the event result</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fire</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">obj</span><span class="p">,</span> <span class="nx">name</span><span class="p">,</span> <span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">event</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">Event</span><span class="p">(</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">obj</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="nx">event</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">event</span><span class="p">.</span><span class="nx">result</span> <span class="o">!==</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC388'><br/></div><div class='line' id='LC389'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Add CSS classes to markup (if specified), called by init</span></div><div class='line' id='LC390'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">addClasses</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC391'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">containerClass</span><span class="p">);</span></div><div class='line' id='LC392'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabsClass</span><span class="p">);</span></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabClass</span><span class="p">);</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">panels</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">panelClass</span><span class="p">);</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set the default tab, whether from hash (bookmarked) or option,</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// called by init</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">setDefaultTab</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^[^\?]*/</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$selectedTab</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">matchTab</span><span class="p">(</span><span class="nx">hash</span><span class="p">).</span><span class="nx">parent</span><span class="p">(),</span></div><div class='line' id='LC402'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$panel</span><span class="p">;</span></div><div class='line' id='LC403'><br/></div><div class='line' id='LC404'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If hash directly matches one of the tabs, active on page-load</span></div><div class='line' id='LC405'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">$selectedTab</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">1</span> <span class="p">){</span></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$defaultTab</span> <span class="o">=</span> <span class="nx">$selectedTab</span><span class="p">;</span></div><div class='line' id='LC407'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">cycle</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC408'><br/></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$panel</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">matchInPanel</span><span class="p">(</span><span class="nx">hash</span><span class="p">);</span></div><div class='line' id='LC411'><br/></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If one of the panels contains the element matching the hash,</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// make it active on page-load</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">$panel</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hash</span> <span class="o">=</span> <span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="nx">$panel</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">);</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$defaultTab</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">matchTab</span><span class="p">(</span><span class="nx">hash</span><span class="p">).</span><span class="nx">parent</span><span class="p">();</span></div><div class='line' id='LC417'><br/></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Otherwise, make the default tab the one that&#39;s active on page-load</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$defaultTab</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">find</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">defaultTab</span><span class="p">);</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">$defaultTab</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">error</span><span class="p">(</span><span class="s2">&quot;The specified default tab (&#39;&quot;</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">defaultTab</span> <span class="o">+</span> <span class="s2">&quot;&#39;) could not be found in the tab set (&#39;&quot;</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">tabs</span> <span class="o">+</span> <span class="s2">&quot;&#39;) out of &quot;</span> <span class="o">+</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="s2">&quot; tabs.&quot;</span><span class="p">);</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC426'><br/></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$defaultTabLink</span> <span class="o">=</span> <span class="nx">$defaultTab</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">).</span><span class="nx">first</span><span class="p">();</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">activateDefaultTab</span><span class="p">(</span><span class="nx">$selectedTab</span><span class="p">);</span></div><div class='line' id='LC430'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC431'><br/></div><div class='line' id='LC432'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Activate defaultTab (or collapse by default), called by setDefaultTab</span></div><div class='line' id='LC433'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">activateDefaultTab</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$selectedTab</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">defaultPanel</span><span class="p">,</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultAjaxUrl</span><span class="p">;</span></div><div class='line' id='LC436'><br/></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">collapsible</span> <span class="o">&amp;&amp;</span> <span class="nx">$selectedTab</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedByDefault</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$defaultTab</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">)</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">children</span><span class="p">()</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">);</span></div><div class='line' id='LC442'><br/></div><div class='line' id='LC443'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC444'><br/></div><div class='line' id='LC445'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultPanel</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span> <span class="nx">$defaultTab</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">panel</span> <span class="p">);</span></div><div class='line' id='LC446'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultAjaxUrl</span> <span class="o">=</span> <span class="nx">$defaultTab</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">ajax</span><span class="p">;</span></div><div class='line' id='LC447'><br/></div><div class='line' id='LC448'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">defaultAjaxUrl</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">cache</span> <span class="o">||</span> <span class="o">!</span><span class="nx">$defaultTab</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">cached</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC449'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;easytabs:ajax:beforeSend&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$defaultTabLink</span><span class="p">,</span> <span class="nx">defaultPanel</span><span class="p">]);</span></div><div class='line' id='LC450'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">defaultPanel</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="nx">defaultAjaxUrl</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">){</span></div><div class='line' id='LC451'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$defaultTab</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">cached</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC452'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;easytabs:ajax:complete&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$defaultTabLink</span><span class="p">,</span> <span class="nx">defaultPanel</span><span class="p">,</span> <span class="nx">response</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">]);</span></div><div class='line' id='LC453'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC455'><br/></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$defaultTab</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">panel</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">show</span><span class="p">()</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">panelActiveClass</span><span class="p">);</span></div><div class='line' id='LC459'><br/></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$defaultTab</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">)</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">children</span><span class="p">()</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">);</span></div><div class='line' id='LC464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC465'><br/></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Fire event when the plugin is initialised</span></div><div class='line' id='LC467'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;easytabs:initialised&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$defaultTabLink</span><span class="p">,</span> <span class="nx">defaultPanel</span><span class="p">]);</span></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC469'><br/></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Bind tab-select funtionality to namespaced click event, called by</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// init</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">bindToTabClicks</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">children</span><span class="p">(</span><span class="s2">&quot;a&quot;</span><span class="p">).</span><span class="nx">bind</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">bind_str</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC474'><br/></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Stop cycling when a tab is clicked</span></div><div class='line' id='LC476'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">settings</span><span class="p">.</span><span class="nx">cycle</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC477'><br/></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Hash will be updated when tab is clicked,</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// don&#39;t cause tab to re-select when hash-change event is fired</span></div><div class='line' id='LC480'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">skipUpdateToHash</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC481'><br/></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Select the panel for the clicked tab</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">selectTab</span><span class="p">(</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">)</span> <span class="p">);</span></div><div class='line' id='LC484'><br/></div><div class='line' id='LC485'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Don&#39;t follow the link to the anchor</span></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span> <span class="o">?</span> <span class="nx">e</span><span class="p">.</span><span class="nx">preventDefault</span><span class="p">()</span> <span class="o">:</span> <span class="nx">e</span><span class="p">.</span><span class="nx">returnValue</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC488'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC489'><br/></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Activate a given tab/panel, called from plugin.selectTab:</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   * fire `easytabs:before` hook</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   * get ajax if new tab is an uncached ajax tab</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   * animate out previously-active panel</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   * fire `easytabs:midTransition` hook</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   * update URL hash</span></div><div class='line' id='LC497'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   * animate in newly-active panel</span></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//   * update CSS classes for inactive and active tabs/panels</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// TODO: This could probably be broken out into many more modular</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// functions</span></div><div class='line' id='LC502'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">activateTab</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">ajaxUrl</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC503'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">panels</span><span class="p">.</span><span class="nx">stop</span><span class="p">(</span><span class="kc">true</span><span class="p">,</span><span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC504'><br/></div><div class='line' id='LC505'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">fire</span><span class="p">(</span><span class="nx">$container</span><span class="p">,</span><span class="s2">&quot;easytabs:before&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">settings</span><span class="p">])</span> <span class="p">){</span></div><div class='line' id='LC506'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$visiblePanel</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">panels</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s2">&quot;:visible&quot;</span><span class="p">),</span></div><div class='line' id='LC507'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$panelContainer</span> <span class="o">=</span> <span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">parent</span><span class="p">(),</span></div><div class='line' id='LC508'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">targetHeight</span><span class="p">,</span></div><div class='line' id='LC509'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visibleHeight</span><span class="p">,</span></div><div class='line' id='LC510'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">heightDifference</span><span class="p">,</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">showPanel</span><span class="p">,</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">hash</span> <span class="o">=</span> <span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^[^\?]*/</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC513'><br/></div><div class='line' id='LC514'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">animate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">targetHeight</span> <span class="o">=</span> <span class="nx">getHeightForHidden</span><span class="p">(</span><span class="nx">$targetPanel</span><span class="p">);</span></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visibleHeight</span> <span class="o">=</span> <span class="nx">$visiblePanel</span><span class="p">.</span><span class="nx">length</span> <span class="o">?</span> <span class="nx">setAndReturnHeight</span><span class="p">(</span><span class="nx">$visiblePanel</span><span class="p">)</span> <span class="o">:</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">heightDifference</span> <span class="o">=</span> <span class="nx">targetHeight</span> <span class="o">-</span> <span class="nx">visibleHeight</span><span class="p">;</span></div><div class='line' id='LC518'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC519'><br/></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set lastHash to help indicate if defaultTab should be</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// activated across multiple tab instances.</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lastHash</span> <span class="o">=</span> <span class="nx">hash</span><span class="p">;</span></div><div class='line' id='LC523'><br/></div><div class='line' id='LC524'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// TODO: Move this function elsewhere</span></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">showPanel</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// At this point, the previous panel is hidden, and the new one will be selected</span></div><div class='line' id='LC527'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;easytabs:midTransition&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">settings</span><span class="p">]);</span></div><div class='line' id='LC528'><br/></div><div class='line' id='LC529'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Gracefully animate between panels of differing heights, start height change animation *after* panel change if panel needs to contract,</span></div><div class='line' id='LC530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// so that there is no chance of making the visible panel overflowing the height of the target panel</span></div><div class='line' id='LC531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">animate</span> <span class="o">&amp;&amp;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionIn</span> <span class="o">==</span> <span class="s1">&#39;fadeIn&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">heightDifference</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span></div><div class='line' id='LC533'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$panelContainer</span><span class="p">.</span><span class="nx">animate</span><span class="p">({</span></div><div class='line' id='LC534'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span><span class="o">:</span> <span class="nx">$panelContainer</span><span class="p">.</span><span class="nx">height</span><span class="p">()</span> <span class="o">+</span> <span class="nx">heightDifference</span></div><div class='line' id='LC535'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">transitions</span><span class="p">.</span><span class="nx">halfSpeed</span> <span class="p">).</span><span class="nx">css</span><span class="p">({</span> <span class="s1">&#39;min-height&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span> <span class="p">});</span></div><div class='line' id='LC536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC537'><br/></div><div class='line' id='LC538'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">updateHash</span> <span class="o">&amp;&amp;</span> <span class="o">!</span> <span class="nx">skipUpdateToHash</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">//window.location = url.toString().replace((url.pathname + hash), (url.pathname + $clicked.attr(&quot;href&quot;)));</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Not sure why this behaves so differently, but it&#39;s more straight forward and seems to have less side-effects</span></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">attr</span><span class="p">(</span><span class="s1">&#39;id&#39;</span><span class="p">);</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">skipUpdateToHash</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC545'><br/></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="nx">transitions</span><span class="p">.</span><span class="nx">show</span><span class="p">](</span><span class="nx">transitions</span><span class="p">.</span><span class="nx">speed</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionInEasing</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$panelContainer</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="nx">height</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="s1">&#39;min-height&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">});</span> <span class="c1">// After the transition, unset the height</span></div><div class='line' id='LC549'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s2">&quot;easytabs:after&quot;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">settings</span><span class="p">]);</span></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// callback only gets called if selectTab actually does something, since it&#39;s inside the if block</span></div><div class='line' id='LC551'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">callback</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">){</span></div><div class='line' id='LC552'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">();</span></div><div class='line' id='LC553'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC554'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC555'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC556'><br/></div><div class='line' id='LC557'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">ajaxUrl</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="o">!</span><span class="nx">settings</span><span class="p">.</span><span class="nx">cache</span> <span class="o">||</span> <span class="o">!</span><span class="nx">$clicked</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">cached</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC558'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;easytabs:ajax:beforeSend&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">]);</span></div><div class='line' id='LC559'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="nx">ajaxUrl</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">response</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">){</span></div><div class='line' id='LC560'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$clicked</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">cached</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC561'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$container</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span><span class="s1">&#39;easytabs:ajax:complete&#39;</span><span class="p">,</span> <span class="p">[</span><span class="nx">$clicked</span><span class="p">,</span> <span class="nx">$targetPanel</span><span class="p">,</span> <span class="nx">response</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">xhr</span><span class="p">]);</span></div><div class='line' id='LC562'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC563'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC564'><br/></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Gracefully animate between panels of differing heights, start height change animation *before* panel change if panel needs to expand,</span></div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// so that there is no chance of making the target panel overflowing the height of the visible panel</span></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">animate</span> <span class="o">&amp;&amp;</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionOut</span> <span class="o">==</span> <span class="s1">&#39;fadeOut&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">heightDifference</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$panelContainer</span><span class="p">.</span><span class="nx">animate</span><span class="p">({</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span><span class="o">:</span> <span class="p">(</span> <span class="nx">$panelContainer</span><span class="p">.</span><span class="nx">height</span><span class="p">()</span> <span class="o">+</span> <span class="nx">heightDifference</span> <span class="p">)</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span> <span class="nx">transitions</span><span class="p">.</span><span class="nx">halfSpeed</span> <span class="p">);</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Prevent height jumping before height transition is triggered at midTransition</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$panelContainer</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span> <span class="s1">&#39;min-height&#39;</span><span class="o">:</span> <span class="nx">$panelContainer</span><span class="p">.</span><span class="nx">height</span><span class="p">()</span> <span class="p">});</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC577'><br/></div><div class='line' id='LC578'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Change the active tab *first* to provide immediate feedback when the user clicks</span></div><div class='line' id='LC579'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s2">&quot;.&quot;</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">).</span><span class="nx">children</span><span class="p">().</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">);</span></div><div class='line' id='LC580'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s2">&quot;.&quot;</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">).</span><span class="nx">children</span><span class="p">().</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">collapsedClass</span><span class="p">);</span></div><div class='line' id='LC581'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$clicked</span><span class="p">.</span><span class="nx">parent</span><span class="p">().</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">).</span><span class="nx">children</span><span class="p">().</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">tabActiveClass</span><span class="p">);</span></div><div class='line' id='LC582'><br/></div><div class='line' id='LC583'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">panels</span><span class="p">.</span><span class="nx">filter</span><span class="p">(</span><span class="s2">&quot;.&quot;</span> <span class="o">+</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">panelActiveClass</span><span class="p">).</span><span class="nx">removeClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">panelActiveClass</span><span class="p">);</span></div><div class='line' id='LC584'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">addClass</span><span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">panelActiveClass</span><span class="p">);</span></div><div class='line' id='LC585'><br/></div><div class='line' id='LC586'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">$visiblePanel</span><span class="p">.</span><span class="nx">length</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC587'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$visiblePanel</span></div><div class='line' id='LC588'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="nx">transitions</span><span class="p">.</span><span class="nx">hide</span><span class="p">](</span><span class="nx">transitions</span><span class="p">.</span><span class="nx">speed</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionOutEasing</span><span class="p">,</span> <span class="nx">showPanel</span><span class="p">);</span></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span></div><div class='line' id='LC591'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="nx">transitions</span><span class="p">.</span><span class="nx">uncollapse</span><span class="p">](</span><span class="nx">transitions</span><span class="p">.</span><span class="nx">speed</span><span class="p">,</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">transitionUncollapseEasing</span><span class="p">,</span> <span class="nx">showPanel</span><span class="p">);</span></div><div class='line' id='LC592'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC593'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC594'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC595'><br/></div><div class='line' id='LC596'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get heights of panels to enable animation between panels of</span></div><div class='line' id='LC597'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// differing heights, called by activateTab</span></div><div class='line' id='LC598'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">getHeightForHidden</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$targetPanel</span><span class="p">){</span></div><div class='line' id='LC599'><br/></div><div class='line' id='LC600'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">lastHeight</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC601'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">lastHeight</span><span class="p">;</span></div><div class='line' id='LC602'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC603'><br/></div><div class='line' id='LC604'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// this is the only property easytabs changes, so we need to grab its value on each tab change</span></div><div class='line' id='LC605'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">display</span> <span class="o">=</span> <span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;display&#39;</span><span class="p">),</span></div><div class='line' id='LC606'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">outerCloak</span><span class="p">,</span></div><div class='line' id='LC607'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC608'><br/></div><div class='line' id='LC609'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Workaround with wrapping height, because firefox returns wrong</span></div><div class='line' id='LC610'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// height if element itself has absolute positioning.</span></div><div class='line' id='LC611'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// but try/catch block needed for IE7 and IE8 because they throw</span></div><div class='line' id='LC612'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// an &quot;Unspecified error&quot; when trying to create an element</span></div><div class='line' id='LC613'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// with the css position set.</span></div><div class='line' id='LC614'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC615'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">outerCloak</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div&gt;&lt;/div&gt;&#39;</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;position&#39;</span><span class="o">:</span> <span class="s1">&#39;absolute&#39;</span><span class="p">,</span> <span class="s1">&#39;visibility&#39;</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span><span class="p">,</span> <span class="s1">&#39;overflow&#39;</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span><span class="p">});</span></div><div class='line' id='LC616'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC617'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">outerCloak</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div&gt;&lt;/div&gt;&#39;</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;visibility&#39;</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span><span class="p">,</span> <span class="s1">&#39;overflow&#39;</span><span class="o">:</span> <span class="s1">&#39;hidden&#39;</span><span class="p">});</span></div><div class='line' id='LC618'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC619'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">height</span> <span class="o">=</span> <span class="nx">$targetPanel</span></div><div class='line' id='LC620'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">wrap</span><span class="p">(</span><span class="nx">outerCloak</span><span class="p">)</span></div><div class='line' id='LC621'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">css</span><span class="p">({</span><span class="s1">&#39;position&#39;</span><span class="o">:</span><span class="s1">&#39;relative&#39;</span><span class="p">,</span><span class="s1">&#39;visibility&#39;</span><span class="o">:</span><span class="s1">&#39;hidden&#39;</span><span class="p">,</span><span class="s1">&#39;display&#39;</span><span class="o">:</span><span class="s1">&#39;block&#39;</span><span class="p">})</span></div><div class='line' id='LC622'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">outerHeight</span><span class="p">();</span></div><div class='line' id='LC623'><br/></div><div class='line' id='LC624'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">unwrap</span><span class="p">();</span></div><div class='line' id='LC625'><br/></div><div class='line' id='LC626'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Return element to previous state</span></div><div class='line' id='LC627'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">css</span><span class="p">({</span></div><div class='line' id='LC628'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">position</span><span class="o">:</span> <span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">position</span><span class="p">,</span></div><div class='line' id='LC629'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">visibility</span><span class="o">:</span> <span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">visibility</span><span class="p">,</span></div><div class='line' id='LC630'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">display</span><span class="o">:</span> <span class="nx">display</span></div><div class='line' id='LC631'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC632'><br/></div><div class='line' id='LC633'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Cache height</span></div><div class='line' id='LC634'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$targetPanel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">lastHeight</span> <span class="o">=</span> <span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC635'><br/></div><div class='line' id='LC636'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC637'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC638'><br/></div><div class='line' id='LC639'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Since the height of the visible panel may have been manipulated due to interaction,</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// we want to re-cache the visible height on each tab change, called</span></div><div class='line' id='LC641'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// by activateTab</span></div><div class='line' id='LC642'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">setAndReturnHeight</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$visiblePanel</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC643'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="nx">$visiblePanel</span><span class="p">.</span><span class="nx">outerHeight</span><span class="p">();</span></div><div class='line' id='LC644'><br/></div><div class='line' id='LC645'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span> <span class="nx">$visiblePanel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">)</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC646'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$visiblePanel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">).</span><span class="nx">lastHeight</span> <span class="o">=</span> <span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$visiblePanel</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">,</span> <span class="p">{</span><span class="nx">lastHeight</span><span class="o">:</span> <span class="nx">height</span><span class="p">});</span></div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC650'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">height</span><span class="p">;</span></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC652'><br/></div><div class='line' id='LC653'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Setup hash-change callback for forward- and back-button</span></div><div class='line' id='LC654'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// functionality, called by init</span></div><div class='line' id='LC655'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">initHashChange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC656'><br/></div><div class='line' id='LC657'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// enabling back-button with jquery.hashchange plugin</span></div><div class='line' id='LC658'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// http://benalman.com/projects/jquery-hashchange-plugin/</span></div><div class='line' id='LC659'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">hashchange</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">){</span></div><div class='line' id='LC660'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">hashchange</span><span class="p">(</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC661'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">selectTabFromHashChange</span><span class="p">();</span></div><div class='line' id='LC662'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">$</span><span class="p">.</span><span class="nx">address</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">$</span><span class="p">.</span><span class="nx">address</span><span class="p">.</span><span class="nx">change</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// back-button with jquery.address plugin http://www.asual.com/jquery/address/docs/</span></div><div class='line' id='LC664'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">address</span><span class="p">.</span><span class="nx">change</span><span class="p">(</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC665'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">selectTabFromHashChange</span><span class="p">();</span></div><div class='line' id='LC666'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC668'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC669'><br/></div><div class='line' id='LC670'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Begin cycling if set in options, called by init</span></div><div class='line' id='LC671'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">initCycle</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC672'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tabNumber</span><span class="p">;</span></div><div class='line' id='LC673'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">settings</span><span class="p">.</span><span class="nx">cycle</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC674'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tabNumber</span> <span class="o">=</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">tabs</span><span class="p">.</span><span class="nx">index</span><span class="p">(</span><span class="nx">$defaultTab</span><span class="p">);</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setTimeout</span><span class="p">(</span> <span class="kd">function</span><span class="p">(){</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">cycleTabs</span><span class="p">(</span><span class="nx">tabNumber</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span> <span class="p">},</span> <span class="nx">settings</span><span class="p">.</span><span class="nx">cycle</span><span class="p">);</span></div><div class='line' id='LC676'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC677'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC678'><br/></div><div class='line' id='LC679'><br/></div><div class='line' id='LC680'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span><span class="p">.</span><span class="nx">init</span><span class="p">();</span></div><div class='line' id='LC681'><br/></div><div class='line' id='LC682'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC683'><br/></div><div class='line' id='LC684'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">easytabs</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC685'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="nx">arguments</span><span class="p">;</span></div><div class='line' id='LC686'><br/></div><div class='line' id='LC687'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC688'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$this</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="k">this</span><span class="p">),</span></div><div class='line' id='LC689'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span> <span class="o">=</span> <span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">);</span></div><div class='line' id='LC690'><br/></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Initialization was called with $(el).easytabs( { options } );</span></div><div class='line' id='LC692'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="kc">undefined</span> <span class="o">===</span> <span class="nx">plugin</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC693'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">plugin</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">$</span><span class="p">.</span><span class="nx">easytabs</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">options</span><span class="p">);</span></div><div class='line' id='LC694'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$this</span><span class="p">.</span><span class="nx">data</span><span class="p">(</span><span class="s1">&#39;easytabs&#39;</span><span class="p">,</span> <span class="nx">plugin</span><span class="p">);</span></div><div class='line' id='LC695'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC696'><br/></div><div class='line' id='LC697'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// User called public method</span></div><div class='line' id='LC698'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">publicMethods</span><span class="p">[</span><span class="nx">options</span><span class="p">]</span> <span class="p">){</span></div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">plugin</span><span class="p">.</span><span class="nx">publicMethods</span><span class="p">[</span><span class="nx">options</span><span class="p">](</span><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span> <span class="nx">args</span><span class="p">,</span> <span class="mi">1</span> <span class="p">));</span></div><div class='line' id='LC700'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC701'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC702'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC703'><br/></div><div class='line' id='LC704'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.09160s from fe4.rs.github.com">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/JangoSteve/jQuery-EasyTabs/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

    
  </body>
</html>

