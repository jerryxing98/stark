




<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>jquery-hashchange/jquery.ba-hashchange.js at v1.3 · cowboy/jquery-hashchange</title>
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

        <link data-pjax-transient rel='permalink' href='/cowboy/jquery-hashchange/blob/640426d6d77cd33ed5411effdd0e9918d1ad8df7/jquery.ba-hashchange.js'>
  <meta property="og:title" content="jquery-hashchange"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/cowboy/jquery-hashchange"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="jquery-hashchange - This jQuery plugin enables very basic bookmarkable #hash history via a cross-browser HTML5 window.onhashchange event."/>

  <meta name="description" content="jquery-hashchange - This jQuery plugin enables very basic bookmarkable #hash history via a cross-browser HTML5 window.onhashchange event." />

  <meta content="54051" name="octolytics-dimension-user_id" /><meta content="cowboy" name="octolytics-dimension-user_login" /><meta content="465383" name="octolytics-dimension-repository_id" /><meta content="cowboy/jquery-hashchange" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="465383" name="octolytics-dimension-repository_network_root_id" /><meta content="cowboy/jquery-hashchange" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/cowboy/jquery-hashchange/commits/v1.3.atom" rel="alternate" title="Recent Commits to jquery-hashchange:v1.3" type="application/atom+xml" />

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
      data-repo="cowboy/jquery-hashchange"
      data-branch="v1.3"
      data-sha="6bfa223c07582e87ff8164d32cfbe5900dda2f65"
  >

    <input type="hidden" name="nwo" value="cowboy/jquery-hashchange" />

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
      <span title="cowboy/jquery-hashchange">This repository</span>
    </li>
    <li>
      <a href="/cowboy/jquery-hashchange/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
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
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="eLI8PoeFdWzN0X1FVRWvpPzcXcsFwglsC4DjsWLgwxk=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="465383" />

    <div class="select-menu js-menu-container js-select-menu">
        <a class="social-count js-social-count" href="/cowboy/jquery-hashchange/watchers">
          42
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
  <a href="/cowboy/jquery-hashchange/unstar" class="minibutton with-count js-toggler-target star-button starred upwards" title="Unstar this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star-delete"></span><span class="text">Unstar</span>
  </a>
  <a href="/cowboy/jquery-hashchange/star" class="minibutton with-count js-toggler-target star-button unstarred upwards " title="Star this repo" data-remote="true" data-method="post" rel="nofollow">
    <span class="octicon octicon-star"></span><span class="text">Star</span>
  </a>
  <a class="social-count js-social-count" href="/cowboy/jquery-hashchange/stargazers">757</a>
</div>

  </li>


        <li>
          <a href="/cowboy/jquery-hashchange/fork" class="minibutton with-count js-toggler-target fork-button lighter upwards" title="Fork this repo" rel="nofollow" data-method="post">
            <span class="octicon octicon-git-branch-create"></span><span class="text">Fork</span>
          </a>
          <a href="/cowboy/jquery-hashchange/network" class="social-count">154</a>
        </li>


</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/cowboy" class="url fn" itemprop="url" rel="author"><span itemprop="title">cowboy</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/cowboy/jquery-hashchange" class="js-current-repository js-repo-home-link">jquery-hashchange</a></strong>

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
        <a href="/cowboy/jquery-hashchange/tree/v1.3" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /cowboy/jquery-hashchange/tree/v1.3">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/cowboy/jquery-hashchange/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /cowboy/jquery-hashchange/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>17</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/cowboy/jquery-hashchange/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /cowboy/jquery-hashchange/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>8</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


        <li class="tooltipped leftwards" title="Wiki">
          <a href="/cowboy/jquery-hashchange/wiki" aria-label="Wiki" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_wiki /cowboy/jquery-hashchange/wiki">
            <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>
    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/cowboy/jquery-hashchange/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /cowboy/jquery-hashchange/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/cowboy/jquery-hashchange/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /cowboy/jquery-hashchange/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/cowboy/jquery-hashchange/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /cowboy/jquery-hashchange/network">
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
         value="https://github.com/cowboy/jquery-hashchange.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/cowboy/jquery-hashchange.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>

  <input type="text" class="clone js-url-field"
         value="git@github.com:cowboy/jquery-hashchange.git" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="git@github.com:cowboy/jquery-hashchange.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>

  <input type="text" class="clone js-url-field"
         value="https://github.com/cowboy/jquery-hashchange" readonly="readonly">

  <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/cowboy/jquery-hashchange" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
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

                <a href="/cowboy/jquery-hashchange/archive/v1.3.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:6b2c0de9d36371eb8b5eda4133cda70f -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:6b2c0de9d36371eb8b5eda4133cda70f -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/cowboy/jquery-hashchange/find/v1.3" data-pjax data-hotkey="t" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="v1.3">
    <span class="octicon octicon-tag"></span>
    <i>tag:</i>
    <span class="js-select-button">v1.3</span>
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
              <a href="/cowboy/jquery-hashchange/blob/domain/jquery.ba-hashchange.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="domain" data-skip-pjax="true" rel="nofollow" title="domain">domain</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cowboy/jquery-hashchange/blob/master/jquery.ba-hashchange.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="master" data-skip-pjax="true" rel="nofollow" title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cowboy/jquery-hashchange/blob/v1.3/jquery.ba-hashchange.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.3" data-skip-pjax="true" rel="nofollow" title="v1.3">v1.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cowboy/jquery-hashchange/blob/v1.2/jquery.ba-hashchange.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.2" data-skip-pjax="true" rel="nofollow" title="v1.2">v1.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cowboy/jquery-hashchange/blob/v1.1/jquery.ba-hashchange.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.1" data-skip-pjax="true" rel="nofollow" title="v1.1">v1.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/cowboy/jquery-hashchange/blob/v1.0/jquery.ba-hashchange.js" class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target" data-name="v1.0" data-skip-pjax="true" rel="nofollow" title="v1.0">v1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/cowboy/jquery-hashchange/tree/v1.3" data-branch="v1.3" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jquery-hashchange</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.ba-hashchange.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="jquery.ba-hashchange.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  
  <div class="commit file-history-tease">
    <img class="main-avatar" height="24" src="https://secure.gravatar.com/avatar/978a1a2a80394217a0e39c84f07a7c16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
    <span class="author"><a href="/cowboy" rel="author">cowboy</a></span>
    <time class="js-relative-date" datetime="2010-07-21T13:28:33-07:00" title="2010-07-21 13:28:33">July 21, 2010</time>
    <div class="commit-title">
        <a href="/cowboy/jquery-hashchange/commit/640426d6d77cd33ed5411effdd0e9918d1ad8df7" class="message" data-pjax="true" title="Unit tests pass in all browsers, releasing v1.3">Unit tests pass in all browsers, releasing v1.3</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>1</strong> contributor</a></p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
        <li class="facebox-user-list-item">
          <img height="24" src="https://secure.gravatar.com/avatar/978a1a2a80394217a0e39c84f07a7c16?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="24" />
          <a href="/cowboy">cowboy</a>
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
          <span>391 lines (341 sloc)</span>
        <span>16.427 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton js-entice" href=""
                 data-entice="You must be on a branch to make or propose changes to this file">Edit</a>
          <a href="/cowboy/jquery-hashchange/raw/v1.3/jquery.ba-hashchange.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/cowboy/jquery-hashchange/blame/v1.3/jquery.ba-hashchange.js" class="button minibutton ">Blame</a>
          <a href="/cowboy/jquery-hashchange/commits/v1.3/jquery.ba-hashchange.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon js-entice" href=""
               data-entice="You must be signed in and on a branch to make or propose changes">
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

          </td>
          <td class="blob-line-code">
                  <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*!</span></div><div class='line' id='LC2'><span class="cm"> * jQuery hashchange event - v1.3 - 7/21/2010</span></div><div class='line' id='LC3'><span class="cm"> * http://benalman.com/projects/jquery-hashchange-plugin/</span></div><div class='line' id='LC4'><span class="cm"> * </span></div><div class='line' id='LC5'><span class="cm"> * Copyright (c) 2010 &quot;Cowboy&quot; Ben Alman</span></div><div class='line' id='LC6'><span class="cm"> * Dual licensed under the MIT and GPL licenses.</span></div><div class='line' id='LC7'><span class="cm"> * http://benalman.com/about/license/</span></div><div class='line' id='LC8'><span class="cm"> */</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="c1">// Script: jQuery hashchange event</span></div><div class='line' id='LC11'><span class="c1">//</span></div><div class='line' id='LC12'><span class="c1">// *Version: 1.3, Last updated: 7/21/2010*</span></div><div class='line' id='LC13'><span class="c1">// </span></div><div class='line' id='LC14'><span class="c1">// Project Home - http://benalman.com/projects/jquery-hashchange-plugin/</span></div><div class='line' id='LC15'><span class="c1">// GitHub       - http://github.com/cowboy/jquery-hashchange/</span></div><div class='line' id='LC16'><span class="c1">// Source       - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.js</span></div><div class='line' id='LC17'><span class="c1">// (Minified)   - http://github.com/cowboy/jquery-hashchange/raw/master/jquery.ba-hashchange.min.js (0.8kb gzipped)</span></div><div class='line' id='LC18'><span class="c1">// </span></div><div class='line' id='LC19'><span class="c1">// About: License</span></div><div class='line' id='LC20'><span class="c1">// </span></div><div class='line' id='LC21'><span class="c1">// Copyright (c) 2010 &quot;Cowboy&quot; Ben Alman,</span></div><div class='line' id='LC22'><span class="c1">// Dual licensed under the MIT and GPL licenses.</span></div><div class='line' id='LC23'><span class="c1">// http://benalman.com/about/license/</span></div><div class='line' id='LC24'><span class="c1">// </span></div><div class='line' id='LC25'><span class="c1">// About: Examples</span></div><div class='line' id='LC26'><span class="c1">// </span></div><div class='line' id='LC27'><span class="c1">// These working examples, complete with fully commented code, illustrate a few</span></div><div class='line' id='LC28'><span class="c1">// ways in which this plugin can be used.</span></div><div class='line' id='LC29'><span class="c1">// </span></div><div class='line' id='LC30'><span class="c1">// hashchange event - http://benalman.com/code/projects/jquery-hashchange/examples/hashchange/</span></div><div class='line' id='LC31'><span class="c1">// document.domain - http://benalman.com/code/projects/jquery-hashchange/examples/document_domain/</span></div><div class='line' id='LC32'><span class="c1">// </span></div><div class='line' id='LC33'><span class="c1">// About: Support and Testing</span></div><div class='line' id='LC34'><span class="c1">// </span></div><div class='line' id='LC35'><span class="c1">// Information about what version or versions of jQuery this plugin has been</span></div><div class='line' id='LC36'><span class="c1">// tested with, what browsers it has been tested in, and where the unit tests</span></div><div class='line' id='LC37'><span class="c1">// reside (so you can test it yourself).</span></div><div class='line' id='LC38'><span class="c1">// </span></div><div class='line' id='LC39'><span class="c1">// jQuery Versions - 1.2.6, 1.3.2, 1.4.1, 1.4.2</span></div><div class='line' id='LC40'><span class="c1">// Browsers Tested - Internet Explorer 6-8, Firefox 2-4, Chrome 5-6, Safari 3.2-5,</span></div><div class='line' id='LC41'><span class="c1">//                   Opera 9.6-10.60, iPhone 3.1, Android 1.6-2.2, BlackBerry 4.6-5.</span></div><div class='line' id='LC42'><span class="c1">// Unit Tests      - http://benalman.com/code/projects/jquery-hashchange/unit/</span></div><div class='line' id='LC43'><span class="c1">// </span></div><div class='line' id='LC44'><span class="c1">// About: Known issues</span></div><div class='line' id='LC45'><span class="c1">// </span></div><div class='line' id='LC46'><span class="c1">// While this jQuery hashchange event implementation is quite stable and</span></div><div class='line' id='LC47'><span class="c1">// robust, there are a few unfortunate browser bugs surrounding expected</span></div><div class='line' id='LC48'><span class="c1">// hashchange event-based behaviors, independent of any JavaScript</span></div><div class='line' id='LC49'><span class="c1">// window.onhashchange abstraction. See the following examples for more</span></div><div class='line' id='LC50'><span class="c1">// information:</span></div><div class='line' id='LC51'><span class="c1">// </span></div><div class='line' id='LC52'><span class="c1">// Chrome: Back Button - http://benalman.com/code/projects/jquery-hashchange/examples/bug-chrome-back-button/</span></div><div class='line' id='LC53'><span class="c1">// Firefox: Remote XMLHttpRequest - http://benalman.com/code/projects/jquery-hashchange/examples/bug-firefox-remote-xhr/</span></div><div class='line' id='LC54'><span class="c1">// WebKit: Back Button in an Iframe - http://benalman.com/code/projects/jquery-hashchange/examples/bug-webkit-hash-iframe/</span></div><div class='line' id='LC55'><span class="c1">// Safari: Back Button from a different domain - http://benalman.com/code/projects/jquery-hashchange/examples/bug-safari-back-from-diff-domain/</span></div><div class='line' id='LC56'><span class="c1">// </span></div><div class='line' id='LC57'><span class="c1">// Also note that should a browser natively support the window.onhashchange </span></div><div class='line' id='LC58'><span class="c1">// event, but not report that it does, the fallback polling loop will be used.</span></div><div class='line' id='LC59'><span class="c1">// </span></div><div class='line' id='LC60'><span class="c1">// About: Release History</span></div><div class='line' id='LC61'><span class="c1">// </span></div><div class='line' id='LC62'><span class="c1">// 1.3   - (7/21/2010) Reorganized IE6/7 Iframe code to make it more</span></div><div class='line' id='LC63'><span class="c1">//         &quot;removable&quot; for mobile-only development. Added IE6/7 document.title</span></div><div class='line' id='LC64'><span class="c1">//         support. Attempted to make Iframe as hidden as possible by using</span></div><div class='line' id='LC65'><span class="c1">//         techniques from http://www.paciellogroup.com/blog/?p=604. Added </span></div><div class='line' id='LC66'><span class="c1">//         support for the &quot;shortcut&quot; format $(window).hashchange( fn ) and</span></div><div class='line' id='LC67'><span class="c1">//         $(window).hashchange() like jQuery provides for built-in events.</span></div><div class='line' id='LC68'><span class="c1">//         Renamed jQuery.hashchangeDelay to &lt;jQuery.fn.hashchange.delay&gt; and</span></div><div class='line' id='LC69'><span class="c1">//         lowered its default value to 50. Added &lt;jQuery.fn.hashchange.domain&gt;</span></div><div class='line' id='LC70'><span class="c1">//         and &lt;jQuery.fn.hashchange.src&gt; properties plus document-domain.html</span></div><div class='line' id='LC71'><span class="c1">//         file to address access denied issues when setting document.domain in</span></div><div class='line' id='LC72'><span class="c1">//         IE6/7.</span></div><div class='line' id='LC73'><span class="c1">// 1.2   - (2/11/2010) Fixed a bug where coming back to a page using this plugin</span></div><div class='line' id='LC74'><span class="c1">//         from a page on another domain would cause an error in Safari 4. Also,</span></div><div class='line' id='LC75'><span class="c1">//         IE6/7 Iframe is now inserted after the body (this actually works),</span></div><div class='line' id='LC76'><span class="c1">//         which prevents the page from scrolling when the event is first bound.</span></div><div class='line' id='LC77'><span class="c1">//         Event can also now be bound before DOM ready, but it won&#39;t be usable</span></div><div class='line' id='LC78'><span class="c1">//         before then in IE6/7.</span></div><div class='line' id='LC79'><span class="c1">// 1.1   - (1/21/2010) Incorporated document.documentMode test to fix IE8 bug</span></div><div class='line' id='LC80'><span class="c1">//         where browser version is incorrectly reported as 8.0, despite</span></div><div class='line' id='LC81'><span class="c1">//         inclusion of the X-UA-Compatible IE=EmulateIE7 meta tag.</span></div><div class='line' id='LC82'><span class="c1">// 1.0   - (1/9/2010) Initial Release. Broke out the jQuery BBQ event.special</span></div><div class='line' id='LC83'><span class="c1">//         window.onhashchange functionality into a separate plugin for users</span></div><div class='line' id='LC84'><span class="c1">//         who want just the basic event &amp; back button support, without all the</span></div><div class='line' id='LC85'><span class="c1">//         extra awesomeness that BBQ provides. This plugin will be included as</span></div><div class='line' id='LC86'><span class="c1">//         part of jQuery BBQ, but also be available separately.</span></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$</span><span class="p">,</span><span class="nb">window</span><span class="p">,</span><span class="kc">undefined</span><span class="p">){</span></div><div class='line' id='LC89'>&nbsp;&nbsp;<span class="s1">&#39;$:nomunge&#39;</span><span class="p">;</span> <span class="c1">// Used by YUI compressor.</span></div><div class='line' id='LC90'>&nbsp;&nbsp;</div><div class='line' id='LC91'>&nbsp;&nbsp;<span class="c1">// Reused string.</span></div><div class='line' id='LC92'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">str_hashchange</span> <span class="o">=</span> <span class="s1">&#39;hashchange&#39;</span><span class="p">,</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC94'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Method / object references.</span></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc</span> <span class="o">=</span> <span class="nb">document</span><span class="p">,</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fake_onhashchange</span><span class="p">,</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">special</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">event</span><span class="p">.</span><span class="nx">special</span><span class="p">,</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC99'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Does the browser support window.onhashchange? Note that IE8 running in</span></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// IE7 compatibility mode reports true for &#39;onhashchange&#39; in window, even</span></div><div class='line' id='LC101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// though the event isn&#39;t supported, so also test document.documentMode.</span></div><div class='line' id='LC102'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc_mode</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">documentMode</span><span class="p">,</span></div><div class='line' id='LC103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">supports_onhashchange</span> <span class="o">=</span> <span class="s1">&#39;on&#39;</span> <span class="o">+</span> <span class="nx">str_hashchange</span> <span class="k">in</span> <span class="nb">window</span> <span class="o">&amp;&amp;</span> <span class="p">(</span> <span class="nx">doc_mode</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">||</span> <span class="nx">doc_mode</span> <span class="o">&gt;</span> <span class="mi">7</span> <span class="p">);</span></div><div class='line' id='LC104'>&nbsp;&nbsp;</div><div class='line' id='LC105'>&nbsp;&nbsp;<span class="c1">// Get location.hash (or what you&#39;d expect location.hash to be) sans any</span></div><div class='line' id='LC106'>&nbsp;&nbsp;<span class="c1">// leading #. Thanks for making this necessary, Firefox!</span></div><div class='line' id='LC107'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">get_fragment</span><span class="p">(</span> <span class="nx">url</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC108'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">url</span> <span class="o">=</span> <span class="nx">url</span> <span class="o">||</span> <span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">;</span></div><div class='line' id='LC109'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="nx">url</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/^[^#]*#?(.*)$/</span><span class="p">,</span> <span class="s1">&#39;$1&#39;</span> <span class="p">);</span></div><div class='line' id='LC110'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC111'>&nbsp;&nbsp;</div><div class='line' id='LC112'>&nbsp;&nbsp;<span class="c1">// Method: jQuery.fn.hashchange</span></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC114'>&nbsp;&nbsp;<span class="c1">// Bind a handler to the window.onhashchange event or trigger all bound</span></div><div class='line' id='LC115'>&nbsp;&nbsp;<span class="c1">// window.onhashchange event handlers. This behavior is consistent with</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="c1">// jQuery&#39;s built-in event handlers.</span></div><div class='line' id='LC117'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC118'>&nbsp;&nbsp;<span class="c1">// Usage:</span></div><div class='line' id='LC119'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC120'>&nbsp;&nbsp;<span class="c1">// &gt; jQuery(window).hashchange( [ handler ] );</span></div><div class='line' id='LC121'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC122'>&nbsp;&nbsp;<span class="c1">// Arguments:</span></div><div class='line' id='LC123'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC124'>&nbsp;&nbsp;<span class="c1">//  handler - (Function) Optional handler to be bound to the hashchange</span></div><div class='line' id='LC125'>&nbsp;&nbsp;<span class="c1">//    event. This is a &quot;shortcut&quot; for the more verbose form:</span></div><div class='line' id='LC126'>&nbsp;&nbsp;<span class="c1">//    jQuery(window).bind( &#39;hashchange&#39;, handler ). If handler is omitted,</span></div><div class='line' id='LC127'>&nbsp;&nbsp;<span class="c1">//    all bound window.onhashchange event handlers will be triggered. This</span></div><div class='line' id='LC128'>&nbsp;&nbsp;<span class="c1">//    is a shortcut for the more verbose</span></div><div class='line' id='LC129'>&nbsp;&nbsp;<span class="c1">//    jQuery(window).trigger( &#39;hashchange&#39; ). These forms are described in</span></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="c1">//    the &lt;hashchange event&gt; section.</span></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC132'>&nbsp;&nbsp;<span class="c1">// Returns:</span></div><div class='line' id='LC133'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC134'>&nbsp;&nbsp;<span class="c1">//  (jQuery) The initial jQuery collection of elements.</span></div><div class='line' id='LC135'>&nbsp;&nbsp;</div><div class='line' id='LC136'>&nbsp;&nbsp;<span class="c1">// Allow the &quot;shortcut&quot; format $(elem).hashchange( fn ) for binding and</span></div><div class='line' id='LC137'>&nbsp;&nbsp;<span class="c1">// $(elem).hashchange() for triggering, like jQuery does for built-in events.</span></div><div class='line' id='LC138'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span> <span class="nx">str_hashchange</span> <span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">fn</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">fn</span> <span class="o">?</span> <span class="k">this</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span> <span class="nx">str_hashchange</span><span class="p">,</span> <span class="nx">fn</span> <span class="p">)</span> <span class="o">:</span> <span class="k">this</span><span class="p">.</span><span class="nx">trigger</span><span class="p">(</span> <span class="nx">str_hashchange</span> <span class="p">);</span></div><div class='line' id='LC140'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC141'>&nbsp;&nbsp;</div><div class='line' id='LC142'>&nbsp;&nbsp;<span class="c1">// Property: jQuery.fn.hashchange.delay</span></div><div class='line' id='LC143'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC144'>&nbsp;&nbsp;<span class="c1">// The numeric interval (in milliseconds) at which the &lt;hashchange event&gt;</span></div><div class='line' id='LC145'>&nbsp;&nbsp;<span class="c1">// polling loop executes. Defaults to 50.</span></div><div class='line' id='LC146'>&nbsp;&nbsp;</div><div class='line' id='LC147'>&nbsp;&nbsp;<span class="c1">// Property: jQuery.fn.hashchange.domain</span></div><div class='line' id='LC148'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC149'>&nbsp;&nbsp;<span class="c1">// If you&#39;re setting document.domain in your JavaScript, and you want hash</span></div><div class='line' id='LC150'>&nbsp;&nbsp;<span class="c1">// history to work in IE6/7, not only must this property be set, but you must</span></div><div class='line' id='LC151'>&nbsp;&nbsp;<span class="c1">// also set document.domain BEFORE jQuery is loaded into the page. This</span></div><div class='line' id='LC152'>&nbsp;&nbsp;<span class="c1">// property is only applicable if you are supporting IE6/7 (or IE8 operating</span></div><div class='line' id='LC153'>&nbsp;&nbsp;<span class="c1">// in &quot;IE7 compatibility&quot; mode).</span></div><div class='line' id='LC154'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC155'>&nbsp;&nbsp;<span class="c1">// In addition, the &lt;jQuery.fn.hashchange.src&gt; property must be set to the</span></div><div class='line' id='LC156'>&nbsp;&nbsp;<span class="c1">// path of the included &quot;document-domain.html&quot; file, which can be renamed or</span></div><div class='line' id='LC157'>&nbsp;&nbsp;<span class="c1">// modified if necessary (note that the document.domain specified must be the</span></div><div class='line' id='LC158'>&nbsp;&nbsp;<span class="c1">// same in both your main JavaScript as well as in this file).</span></div><div class='line' id='LC159'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC160'>&nbsp;&nbsp;<span class="c1">// Usage:</span></div><div class='line' id='LC161'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC162'>&nbsp;&nbsp;<span class="c1">// jQuery.fn.hashchange.domain = document.domain;</span></div><div class='line' id='LC163'>&nbsp;&nbsp;</div><div class='line' id='LC164'>&nbsp;&nbsp;<span class="c1">// Property: jQuery.fn.hashchange.src</span></div><div class='line' id='LC165'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC166'>&nbsp;&nbsp;<span class="c1">// If, for some reason, you need to specify an Iframe src file (for example,</span></div><div class='line' id='LC167'>&nbsp;&nbsp;<span class="c1">// when setting document.domain as in &lt;jQuery.fn.hashchange.domain&gt;), you can</span></div><div class='line' id='LC168'>&nbsp;&nbsp;<span class="c1">// do so using this property. Note that when using this property, history</span></div><div class='line' id='LC169'>&nbsp;&nbsp;<span class="c1">// won&#39;t be recorded in IE6/7 until the Iframe src file loads. This property</span></div><div class='line' id='LC170'>&nbsp;&nbsp;<span class="c1">// is only applicable if you are supporting IE6/7 (or IE8 operating in &quot;IE7</span></div><div class='line' id='LC171'>&nbsp;&nbsp;<span class="c1">// compatibility&quot; mode).</span></div><div class='line' id='LC172'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC173'>&nbsp;&nbsp;<span class="c1">// Usage:</span></div><div class='line' id='LC174'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC175'>&nbsp;&nbsp;<span class="c1">// jQuery.fn.hashchange.src = &#39;path/to/file.html&#39;;</span></div><div class='line' id='LC176'>&nbsp;&nbsp;</div><div class='line' id='LC177'>&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span> <span class="nx">str_hashchange</span> <span class="p">].</span><span class="nx">delay</span> <span class="o">=</span> <span class="mi">50</span><span class="p">;</span></div><div class='line' id='LC178'>&nbsp;&nbsp;<span class="cm">/*</span></div><div class='line' id='LC179'><span class="cm">  $.fn[ str_hashchange ].domain = null;</span></div><div class='line' id='LC180'><span class="cm">  $.fn[ str_hashchange ].src = null;</span></div><div class='line' id='LC181'><span class="cm">  */</span></div><div class='line' id='LC182'>&nbsp;&nbsp;</div><div class='line' id='LC183'>&nbsp;&nbsp;<span class="c1">// Event: hashchange event</span></div><div class='line' id='LC184'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC185'>&nbsp;&nbsp;<span class="c1">// Fired when location.hash changes. In browsers that support it, the native</span></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="c1">// HTML5 window.onhashchange event is used, otherwise a polling loop is</span></div><div class='line' id='LC187'>&nbsp;&nbsp;<span class="c1">// initialized, running every &lt;jQuery.fn.hashchange.delay&gt; milliseconds to</span></div><div class='line' id='LC188'>&nbsp;&nbsp;<span class="c1">// see if the hash has changed. In IE6/7 (and IE8 operating in &quot;IE7</span></div><div class='line' id='LC189'>&nbsp;&nbsp;<span class="c1">// compatibility&quot; mode), a hidden Iframe is created to allow the back button</span></div><div class='line' id='LC190'>&nbsp;&nbsp;<span class="c1">// and hash-based history to work.</span></div><div class='line' id='LC191'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC192'>&nbsp;&nbsp;<span class="c1">// Usage as described in &lt;jQuery.fn.hashchange&gt;:</span></div><div class='line' id='LC193'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC194'>&nbsp;&nbsp;<span class="c1">// &gt; // Bind an event handler.</span></div><div class='line' id='LC195'>&nbsp;&nbsp;<span class="c1">// &gt; jQuery(window).hashchange( function(e) {</span></div><div class='line' id='LC196'>&nbsp;&nbsp;<span class="c1">// &gt;   var hash = location.hash;</span></div><div class='line' id='LC197'>&nbsp;&nbsp;<span class="c1">// &gt;   ...</span></div><div class='line' id='LC198'>&nbsp;&nbsp;<span class="c1">// &gt; });</span></div><div class='line' id='LC199'>&nbsp;&nbsp;<span class="c1">// &gt; </span></div><div class='line' id='LC200'>&nbsp;&nbsp;<span class="c1">// &gt; // Manually trigger the event handler.</span></div><div class='line' id='LC201'>&nbsp;&nbsp;<span class="c1">// &gt; jQuery(window).hashchange();</span></div><div class='line' id='LC202'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC203'>&nbsp;&nbsp;<span class="c1">// A more verbose usage that allows for event namespacing:</span></div><div class='line' id='LC204'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC205'>&nbsp;&nbsp;<span class="c1">// &gt; // Bind an event handler.</span></div><div class='line' id='LC206'>&nbsp;&nbsp;<span class="c1">// &gt; jQuery(window).bind( &#39;hashchange&#39;, function(e) {</span></div><div class='line' id='LC207'>&nbsp;&nbsp;<span class="c1">// &gt;   var hash = location.hash;</span></div><div class='line' id='LC208'>&nbsp;&nbsp;<span class="c1">// &gt;   ...</span></div><div class='line' id='LC209'>&nbsp;&nbsp;<span class="c1">// &gt; });</span></div><div class='line' id='LC210'>&nbsp;&nbsp;<span class="c1">// &gt; </span></div><div class='line' id='LC211'>&nbsp;&nbsp;<span class="c1">// &gt; // Manually trigger the event handler.</span></div><div class='line' id='LC212'>&nbsp;&nbsp;<span class="c1">// &gt; jQuery(window).trigger( &#39;hashchange&#39; );</span></div><div class='line' id='LC213'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC214'>&nbsp;&nbsp;<span class="c1">// Additional Notes:</span></div><div class='line' id='LC215'>&nbsp;&nbsp;<span class="c1">// </span></div><div class='line' id='LC216'>&nbsp;&nbsp;<span class="c1">// * The polling loop and Iframe are not created until at least one handler</span></div><div class='line' id='LC217'>&nbsp;&nbsp;<span class="c1">//   is actually bound to the &#39;hashchange&#39; event.</span></div><div class='line' id='LC218'>&nbsp;&nbsp;<span class="c1">// * If you need the bound handler(s) to execute immediately, in cases where</span></div><div class='line' id='LC219'>&nbsp;&nbsp;<span class="c1">//   a location.hash exists on page load, via bookmark or page refresh for</span></div><div class='line' id='LC220'>&nbsp;&nbsp;<span class="c1">//   example, use jQuery(window).hashchange() or the more verbose </span></div><div class='line' id='LC221'>&nbsp;&nbsp;<span class="c1">//   jQuery(window).trigger( &#39;hashchange&#39; ).</span></div><div class='line' id='LC222'>&nbsp;&nbsp;<span class="c1">// * The event can be bound before DOM ready, but since it won&#39;t be usable</span></div><div class='line' id='LC223'>&nbsp;&nbsp;<span class="c1">//   before then in IE6/7 (due to the necessary Iframe), recommended usage is</span></div><div class='line' id='LC224'>&nbsp;&nbsp;<span class="c1">//   to bind it inside a DOM ready handler.</span></div><div class='line' id='LC225'>&nbsp;&nbsp;</div><div class='line' id='LC226'>&nbsp;&nbsp;<span class="c1">// Override existing $.event.special.hashchange methods (allowing this plugin</span></div><div class='line' id='LC227'>&nbsp;&nbsp;<span class="c1">// to be defined after jQuery BBQ in BBQ&#39;s source code).</span></div><div class='line' id='LC228'>&nbsp;&nbsp;<span class="nx">special</span><span class="p">[</span> <span class="nx">str_hashchange</span> <span class="p">]</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span> <span class="nx">special</span><span class="p">[</span> <span class="nx">str_hashchange</span> <span class="p">],</span> <span class="p">{</span></div><div class='line' id='LC229'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC230'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Called only when the first &#39;hashchange&#39; event is bound to window.</span></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">setup</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If window.onhashchange is supported natively, there&#39;s nothing to do..</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">supports_onhashchange</span> <span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Otherwise, we need to create our own. And we don&#39;t want to call this</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// until the user binds to the event, just in case they never do, since it</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// will create a polling loop and possibly even a hidden Iframe.</span></div><div class='line' id='LC238'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span> <span class="nx">fake_onhashchange</span><span class="p">.</span><span class="nx">start</span> <span class="p">);</span></div><div class='line' id='LC239'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC240'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Called only when the last &#39;hashchange&#39; event is unbound from window.</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">teardown</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// If window.onhashchange is supported natively, there&#39;s nothing to do..</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">supports_onhashchange</span> <span class="p">)</span> <span class="p">{</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span> <span class="p">}</span></div><div class='line' id='LC245'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC246'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Otherwise, we need to stop ours (if possible).</span></div><div class='line' id='LC247'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span> <span class="nx">fake_onhashchange</span><span class="p">.</span><span class="nx">stop</span> <span class="p">);</span></div><div class='line' id='LC248'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC250'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC251'>&nbsp;&nbsp;</div><div class='line' id='LC252'>&nbsp;&nbsp;<span class="c1">// fake_onhashchange does all the work of triggering the window.onhashchange</span></div><div class='line' id='LC253'>&nbsp;&nbsp;<span class="c1">// event for browsers that don&#39;t natively support it, including creating a</span></div><div class='line' id='LC254'>&nbsp;&nbsp;<span class="c1">// polling loop to watch for hash changes and in IE 6/7 creating a hidden</span></div><div class='line' id='LC255'>&nbsp;&nbsp;<span class="c1">// Iframe to enable back and forward.</span></div><div class='line' id='LC256'>&nbsp;&nbsp;<span class="nx">fake_onhashchange</span> <span class="o">=</span> <span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="p">{},</span></div><div class='line' id='LC258'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout_id</span><span class="p">,</span></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Remember the initial hash so it doesn&#39;t get triggered immediately.</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">last_hash</span> <span class="o">=</span> <span class="nx">get_fragment</span><span class="p">(),</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fn_retval</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">){</span> <span class="k">return</span> <span class="nx">val</span><span class="p">;</span> <span class="p">},</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">history_set</span> <span class="o">=</span> <span class="nx">fn_retval</span><span class="p">,</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">history_get</span> <span class="o">=</span> <span class="nx">fn_retval</span><span class="p">;</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Start the polling loop.</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">start</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout_id</span> <span class="o">||</span> <span class="nx">poll</span><span class="p">();</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Stop the polling loop.</span></div><div class='line' id='LC273'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">stop</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC274'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout_id</span> <span class="o">&amp;&amp;</span> <span class="nx">clearTimeout</span><span class="p">(</span> <span class="nx">timeout_id</span> <span class="p">);</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout_id</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC276'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC278'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// This polling loop checks every $.fn.hashchange.delay milliseconds to see</span></div><div class='line' id='LC279'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if location.hash has changed, and triggers the &#39;hashchange&#39; event on</span></div><div class='line' id='LC280'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// window when necessary.</span></div><div class='line' id='LC281'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">poll</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">hash</span> <span class="o">=</span> <span class="nx">get_fragment</span><span class="p">(),</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">history_hash</span> <span class="o">=</span> <span class="nx">history_get</span><span class="p">(</span> <span class="nx">last_hash</span> <span class="p">);</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC285'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">hash</span> <span class="o">!==</span> <span class="nx">last_hash</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC286'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">history_set</span><span class="p">(</span> <span class="nx">last_hash</span> <span class="o">=</span> <span class="nx">hash</span><span class="p">,</span> <span class="nx">history_hash</span> <span class="p">);</span></div><div class='line' id='LC287'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">(</span><span class="nb">window</span><span class="p">).</span><span class="nx">trigger</span><span class="p">(</span> <span class="nx">str_hashchange</span> <span class="p">);</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC290'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span> <span class="nx">history_hash</span> <span class="o">!==</span> <span class="nx">last_hash</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC291'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="o">=</span> <span class="nx">location</span><span class="p">.</span><span class="nx">href</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span> <span class="sr">/#.*/</span><span class="p">,</span> <span class="s1">&#39;&#39;</span> <span class="p">)</span> <span class="o">+</span> <span class="nx">history_hash</span><span class="p">;</span></div><div class='line' id='LC292'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC294'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timeout_id</span> <span class="o">=</span> <span class="nx">setTimeout</span><span class="p">(</span> <span class="nx">poll</span><span class="p">,</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span> <span class="nx">str_hashchange</span> <span class="p">].</span><span class="nx">delay</span> <span class="p">);</span></div><div class='line' id='LC295'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC297'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</span></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// vvvvvvvvvvvvvvvvvvv REMOVE IF NOT SUPPORTING IE6/7/8 vvvvvvvvvvvvvvvvvvv</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$</span><span class="p">.</span><span class="nx">browser</span><span class="p">.</span><span class="nx">msie</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">supports_onhashchange</span> <span class="o">&amp;&amp;</span> <span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Not only do IE6/7 need the &quot;magical&quot; Iframe treatment, but so does IE8</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// when running in &quot;IE7 compatibility&quot; mode.</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">iframe</span><span class="p">,</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe_src</span><span class="p">;</span></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// When the event is bound and polling starts in IE 6/7, create a hidden</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Iframe for history handling.</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">start</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="o">!</span><span class="nx">iframe</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe_src</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span> <span class="nx">str_hashchange</span> <span class="p">].</span><span class="nx">src</span><span class="p">;</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe_src</span> <span class="o">=</span> <span class="nx">iframe_src</span> <span class="o">&amp;&amp;</span> <span class="nx">iframe_src</span> <span class="o">+</span> <span class="nx">get_fragment</span><span class="p">();</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Create hidden Iframe. Attempt to make Iframe as hidden as possible</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// by using techniques from http://www.paciellogroup.com/blog/?p=604.</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;iframe tabindex=&quot;-1&quot; title=&quot;empty&quot;/&gt;&#39;</span><span class="p">).</span><span class="nx">hide</span><span class="p">()</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// When Iframe has completely loaded, initialize the history and</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// start polling.</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">one</span><span class="p">(</span> <span class="s1">&#39;load&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe_src</span> <span class="o">||</span> <span class="nx">history_set</span><span class="p">(</span> <span class="nx">get_fragment</span><span class="p">()</span> <span class="p">);</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">poll</span><span class="p">();</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Load Iframe src if specified, otherwise nothing.</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">attr</span><span class="p">(</span> <span class="s1">&#39;src&#39;</span><span class="p">,</span> <span class="nx">iframe_src</span> <span class="o">||</span> <span class="s1">&#39;javascript:0&#39;</span> <span class="p">)</span></div><div class='line' id='LC327'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Append Iframe after the end of the body to prevent unnecessary</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// initial page scrolling (yes, this works).</span></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">insertAfter</span><span class="p">(</span> <span class="s1">&#39;body&#39;</span> <span class="p">)[</span><span class="mi">0</span><span class="p">].</span><span class="nx">contentWindow</span><span class="p">;</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Whenever `document.title` changes, update the Iframe&#39;s title to</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// prettify the back/next history menu entries. Since IE sometimes</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// errors with &quot;Unspecified error&quot; the very first time this is set</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// (yes, very useful) wrap this with a try/catch block.</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">doc</span><span class="p">.</span><span class="nx">onpropertychange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">event</span><span class="p">.</span><span class="nx">propertyName</span> <span class="o">===</span> <span class="s1">&#39;title&#39;</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC339'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe</span><span class="p">.</span><span class="nb">document</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">title</span><span class="p">;</span></div><div class='line' id='LC340'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC341'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{}</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Override the &quot;stop&quot; method since an IE6/7 Iframe was created. Even</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if there are no longer any bound event handlers, the polling loop</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// is still necessary for back/next to work at all!</span></div><div class='line' id='LC350'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">stop</span> <span class="o">=</span> <span class="nx">fn_retval</span><span class="p">;</span></div><div class='line' id='LC351'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC352'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Get history by looking at the hidden Iframe&#39;s location.hash.</span></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">history_get</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">get_fragment</span><span class="p">(</span> <span class="nx">iframe</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">href</span> <span class="p">);</span></div><div class='line' id='LC355'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set a new history item by opening and then closing the Iframe</span></div><div class='line' id='LC358'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// document, *then* setting its location.hash. If document.domain has</span></div><div class='line' id='LC359'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// been set, update that as well.</span></div><div class='line' id='LC360'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">history_set</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span> <span class="nx">hash</span><span class="p">,</span> <span class="nx">history_hash</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC361'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">iframe_doc</span> <span class="o">=</span> <span class="nx">iframe</span><span class="p">.</span><span class="nb">document</span><span class="p">,</span></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domain</span> <span class="o">=</span> <span class="nx">$</span><span class="p">.</span><span class="nx">fn</span><span class="p">[</span> <span class="nx">str_hashchange</span> <span class="p">].</span><span class="nx">domain</span><span class="p">;</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span> <span class="nx">hash</span> <span class="o">!==</span> <span class="nx">history_hash</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC365'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Update Iframe with any initial `document.title` that might be set.</span></div><div class='line' id='LC366'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe_doc</span><span class="p">.</span><span class="nx">title</span> <span class="o">=</span> <span class="nx">doc</span><span class="p">.</span><span class="nx">title</span><span class="p">;</span></div><div class='line' id='LC367'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC368'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Opening the Iframe&#39;s document after it has been closed is what</span></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// actually adds a history entry.</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe_doc</span><span class="p">.</span><span class="nx">open</span><span class="p">();</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Set document.domain for the Iframe document as well, if necessary.</span></div><div class='line' id='LC373'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">domain</span> <span class="o">&amp;&amp;</span> <span class="nx">iframe_doc</span><span class="p">.</span><span class="nx">write</span><span class="p">(</span> <span class="s1">&#39;&lt;script&gt;document.domain=&quot;&#39;</span> <span class="o">+</span> <span class="nx">domain</span> <span class="o">+</span> <span class="s1">&#39;&quot;&lt;/script&gt;&#39;</span> <span class="p">);</span></div><div class='line' id='LC374'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC375'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe_doc</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Update the Iframe&#39;s hash, for great justice.</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iframe</span><span class="p">.</span><span class="nx">location</span><span class="p">.</span><span class="nx">hash</span> <span class="o">=</span> <span class="nx">hash</span><span class="p">;</span></div><div class='line' id='LC379'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC380'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC381'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC382'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})();</span></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// ^^^^^^^^^^^^^^^^^^^ REMOVE IF NOT SUPPORTING IE6/7/8 ^^^^^^^^^^^^^^^^^^^</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">;</span></div><div class='line' id='LC388'>&nbsp;&nbsp;<span class="p">})();</span></div><div class='line' id='LC389'>&nbsp;&nbsp;</div><div class='line' id='LC390'><span class="p">})(</span><span class="nx">jQuery</span><span class="p">,</span><span class="k">this</span><span class="p">);</span></div></pre></div>
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
      <li>&copy; 2013 <span title="0.08233s from fe4.rs.github.com">GitHub</span>, Inc.</li>
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
                 data-url="/cowboy/jquery-hashchange/suggestions/commit">
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

