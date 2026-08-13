<!DOCTYPE html>
<html>
<head>
    <title>Button Click Event</title>
</head>
<body>

    <button id="btn">Click Me</button>

    <script>
        document.getElementById("btn").onclick = function() {
            alert("Button clicked!");
        };
    </script>

</body>
</html>
