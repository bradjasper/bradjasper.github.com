(function() {
  var DEBUG, LinkedInSearch, delay, initialize, load_css, load_script,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.log = function() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
      arguments.callee = arguments.callee.caller;
      return console.log(Array.prototype.slice.call(arguments));
    }
  };

  (function(b) {
    var a, c, d, _results;
    c = function() {};
    d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(",");
    _results = [];
    while (a = d.pop()) {
      _results.push(b[a] = b[a] || c);
    }
    return _results;
  })(window.console = window.console || {});

  String.prototype.startswith = function(needle) {
    return this.indexOf(needle) === 0;
  };

  String.prototype.contains = function(needle) {
    return this.indexOf(needle) !== -1;
  };

  DEBUG = false;

  load_css = function(url) {
    "Load CSS from a remote URL";
    var style;
    style = document.createElement("link");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("type", "text/css");
    style.setAttribute("href", url);
    return document.getElementsByTagName("head")[0].appendChild(style);
  };

  load_script = function(url, callback) {
    "Load a script from a remote URL...with a callback when it's complete";
    var script;
    script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {
      script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          return callback();
        }
      };
    } else {
      script.onload = function() {
        return callback();
      };
    }
    script.src = url;
    return document.getElementsByTagName("head")[0].appendChild(script);
  };

  delay = function(ms, fn) {
    return setTimeout(fn, ms);
  };

  load_script("https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", function() {
    console.log("Loaded jQuery", jQuery);
    return initialize(jQuery);
  });

  LinkedInSearch = (function() {
    var DELAY_BETWEEN_PAGES;

    DELAY_BETWEEN_PAGES = 15;

    function LinkedInSearch() {
      this.consume = __bind(this.consume, this);
      this.start = __bind(this.start, this);      console.log("Initializing LinkedIn Search Page...");
      this.full_data = [];
      this.el = this.html();
      this.el.appendTo(document.body);
    }

    LinkedInSearch.prototype.html = function() {
      var button, convert, dashboard,
        _this = this;
      dashboard = $("<div>", {
        "class": "lis_dashboard"
      });
      $("<span>", {
        "class": "lis_title"
      }).html("LinkedIn People Finder").appendTo(dashboard);
      $("<span>", {
        "class": "lis_status"
      }).appendTo(dashboard);
      $("<textarea>", {
        "class": "lis_full_names",
        placeholder: "Full Names"
      }).appendTo(dashboard);
      button = $("<input>", {
        type: "button",
        value: "Start"
      });
      button.click(function() {
        if (_this.running) {
          _this.stop();
          return button.val("Start");
        } else {
          _this.start();
          return button.val("Stop");
        }
      });
      button.appendTo(dashboard);
      $("<hr>").appendTo(dashboard);
      $("<input>", {
        "class": "lis_nameformula",
        placeholder: "Name Formula"
      }).val("first.last").appendTo(dashboard);
      $("<span>", {
        "class": "lis_ampersand"
      }).html("@").appendTo(dashboard);
      $("<input>", {
        "class": "lis_domainformula",
        placeholder: "Domain Formula"
      }).val("domain.com").appendTo(dashboard);
      $("<textarea>", {
        "class": "lis_emails",
        placeholder: "E-mail Addresses"
      }).appendTo(dashboard);
      convert = $("<input>", {
        type: "button",
        value: "Convert"
      });
      convert.click(function() {
        return _this.convert();
      });
      convert.appendTo(dashboard);
      return dashboard;
    };

    LinkedInSearch.prototype.current_index = function() {
      return $(".paginator-curr").siblings("strong").index();
    };

    LinkedInSearch.prototype.next_page = function() {
      var index;
      index = this.current_index();
      if (index !== 0) index -= 1;
      return $(".paginator-curr").get(index).click();
    };

    LinkedInSearch.prototype.is_valid_page = function() {
      return this.get_page_data().length > 0;
    };

    LinkedInSearch.prototype.is_loading = function() {
      return $("#result-ajax .progress-indicator:visible").length > 0;
    };

    LinkedInSearch.prototype.get_page_data = function() {
      return $(".result-data").map(function(i, result) {
        var industry, location, name, title;
        name = $.trim($(result).find(".trk-profile-name").text());
        location = $.trim($(result).find(".location").text());
        industry = $.trim($(result).find(".industry").text());
        title = $.trim($(result).find(".title").text());
        return {
          name: name,
          location: location,
          industry: industry,
          title: title
        };
      });
    };

    LinkedInSearch.prototype.stop = function() {
      console.log("Stopping...");
      this.el.find(".lis_status").html("Stopped...found " + this.full_data.length);
      return this.running = false;
    };

    LinkedInSearch.prototype.start = function() {
      console.log("Starting...");
      this.el.find(".lis_status").html("Running...");
      this.running = true;
      return this.consume();
    };

    LinkedInSearch.prototype.random_delay = function() {
      return (Math.random() * DELAY_BETWEEN_PAGES) + (DELAY_BETWEEN_PAGES / 2);
    };

    LinkedInSearch.prototype.filter_name = function(name) {
      var old_name;
      if (name.contains("LinkedIn Member")) {
        console.log("Name is LinkedIn Member");
        return null;
      }
      if (name.contains(",")) {
        old_name = name;
        name = name.split(",")[0];
        console.log("Name contains comma " + old_name + " -> " + name);
      }
      if (name.match(/\s[A-Z]\.$/i)) {
        console.log("Abbreviated last name " + name);
        return null;
      }
      if (name.split(" ").length !== 2) {
        console.log("Unsure how many names " + name);
        return null;
      }
      if (name.contains("(") || name.contains(")")) {
        old_name = name;
        name = $.trim(name.replace(/\(.*\)/, ""));
        console.log("Name contains parens " + old_name + " -> " + name);
      }
      if (name.match(/[^a-z\s0-9]/ig)) {
        console.log("Name contains unknown chars " + name);
        return null;
      }
      return name;
    };

    LinkedInSearch.prototype.filter_data = function(records) {
      var filtered, record, _i, _len;
      filtered = [];
      for (_i = 0, _len = records.length; _i < _len; _i++) {
        record = records[_i];
        record.name = this.filter_name(record.name);
        if (record.name) filtered.push(record);
      }
      return filtered;
    };

    LinkedInSearch.prototype.split_name = function(name) {
      return name.split(" ");
    };

    LinkedInSearch.prototype.found_data = function(data) {
      var record, _i, _len, _ref;
      console.log("Found " + data.length + " full names");
      _ref = this.filter_data(data);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        record = _ref[_i];
        this.full_data.push(record);
      }
      this.el.find(".lis_full_names").val(this.to_csv(this.full_data));
      return this.el.find(".lis_status").html("Running...found " + this.full_data.length);
    };

    LinkedInSearch.prototype.to_csv = function(records) {
      var line, lines, record, _i, _len;
      lines = [];
      for (_i = 0, _len = records.length; _i < _len; _i++) {
        record = records[_i];
        line = [record.name, record.title, record.location];
        lines.push(line.join("|"));
      }
      return lines.join("\n");
    };

    LinkedInSearch.prototype.convert = function() {
      var domain_formula, email, first, first_initial, formula, full_name, last, last_initial, lines, name_formula, record, records, _i, _len, _ref;
      console.log("Converting...");
      name_formula = this.el.find(".lis_nameformula").val();
      domain_formula = this.el.find(".lis_domainformula").val();
      formula = "" + name_formula + "@" + domain_formula;
      console.log("Formula = " + formula);
      records = this.el.find(".lis_full_names").val().split("\n");
      lines = [];
      for (_i = 0, _len = records.length; _i < _len; _i++) {
        record = records[_i];
        record = record.split("|");
        full_name = record[0];
        _ref = this.split_name(full_name), first = _ref[0], last = _ref[1];
        first_initial = first[0];
        last_initial = last[0];
        email = formula.replace("first_initial", first_initial).replace("last_initial", last_initial).replace("first", first).replace("last", last);
        record.splice(1, 0, email);
        lines.push(record.join("|"));
      }
      return this.el.find(".lis_emails").val(lines.join("\n"));
    };

    LinkedInSearch.prototype.consume = function() {
      var _this = this;
      console.log(this.running);
      if (!this.running) {
        console.log("Aborting...not running...");
        return;
      }
      console.log("Consuming...");
      if (this.is_loading()) {
        console.log("Loading...");
        delay(this.random_delay(), function() {
          console.log("Going to consume more...");
          return _this.consume();
        });
        return;
      }
      if (this.is_valid_page()) {
        this.found_data(this.get_page_data());
        this.next_page();
        return delay(this.random_delay(), function() {
          console.log("Going to consume more...");
          return _this.consume();
        });
      } else {
        console.log("Invalid page");
        return this.stop();
      }
    };

    return LinkedInSearch;

  })();

  initialize = function($) {
    if (location.href.startswith("http://www.linkedin.com/search/fpsearch")) {
      console.log("People search page...");
      if (DEBUG) {
        load_css("http://127.0.0.1:8000/static/css/linkedin.css");
      } else {
        load_css("http://bradjasper.com/linkedin/linkedin.css");
      }
      return window.lisearch = new LinkedInSearch();
    } else {
      return alert("Unable to run on this page. Only available on people search");
    }
  };

}).call(this);
