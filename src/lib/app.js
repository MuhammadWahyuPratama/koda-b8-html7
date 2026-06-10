console.log("app jalan");

require.config({
  baseUrl: "src/helpers",

  paths: {
    jquery:
      "//ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min",
  },
});

require(["script"]);