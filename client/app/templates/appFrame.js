<div class="header">
	<h1>Web Live Streamer</h1>
</header>
<nav class="navbar navbar-inverse navbar-fixed-top">
	<ul id="topnav-ul">
	<li>{{link-to "home"}}Home{{/link-to}}</li>
	<li>{{link-to "profile"}}Profile{{/link-to}}</li>
	<li>{{link-to "about"}}About{{/link-to}}</li>
	<li>{{link-to "contact"}}Contact{{/link-to}}</li>
</nav>

<div class="container">
  {{! stuff from the page loads}}
  {{outlet}}
</div>

<footer class="footer">
  <div class="container">
    <hr>
    <nav class="footerNav">
      <ul>
        <li>{{#link-to "about"}}About{{/link-to}}</li>
        <li>{{#link-to "contact"}}Contact{{/link-to}}</li>
      </ul>
    </nav>
  </div>
</footer>