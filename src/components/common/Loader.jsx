import React from "react";
import "./Loader.css";
import $ from "jquery";

export default function Loader() {
  //   window.addEventListener("load", function () {
  //     $("#work-in-progress").fadeOut(100);
  //   });

  document.onreadystatechange = function (e) {
    if (document.readyState === "interactive") {
      let all = document.getElementsByTagName("*");
      for (let i = 0, max = all.length; i < max; i++) {
        set_ele(all[i]);
      }
    }
  };

  function check_element(ele) {
    let all = document.getElementsByTagName("*");
    let totalele = all.length;
    let per_inc = 100 / all.length;
    if ($(ele).on()) {
      let prog_width =
        per_inc + Number(document.getElementById("progress_width").value);
      document.getElementById("progress_width").value = prog_width;
      $("#progress").animate({ width: prog_width + "%" }, 10, function () {
        if (document.getElementById("progress").style.width === "100%") {
          // $(".progress").fadeOut("slow");
          $("#work-in-progress").fadeOut(100);
        }
      });
    } else {
      set_ele(ele);
    }
  }

  function set_ele(set_element) {
    check_element(set_element);
  }

  return (
    <div id="work-in-progress">
      <div id="progress"></div>
      <input type="hidden" id="progress_width" value="0" />

      <div className="work_spinner"></div>
    </div>
  );
}
