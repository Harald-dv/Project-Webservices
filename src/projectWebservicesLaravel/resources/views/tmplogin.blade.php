<!DOCTYPE html>
<html>
<body>

<form action="/loginL" method="post">
<p>
  <input type="hidden" name="_token" value="{{ csrf_token() }}">
</p>
email: <input type="text" name="email" value="uw@emailadres.com"><br>
password: <input type="text" name="password" value="secret2"><br>
<input type="submit" value="Submit">
</form>

<p>Click submit to create a JWT token.</p>

<p>
  ww "test":
</p>
<?php
  $password = "test";
  echo Hash::make($password);
?>
</body>
</html>
