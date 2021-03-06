	window.JST["query_fields/checkbox"] = function(__obj) {
		var _safe = function(value) {
			if (typeof value === 'undefined' && value == null)
				value = '';
			var result = new String(value);
			result.ecoSafe = true;
			return result;
		};
		return (function() {
			var __out = [], __self = this, _print = function(value) {
				if (typeof value !== 'undefined' && value != null)
					__out.push(value.ecoSafe ? value : __self.escape(value));
			}, _capture = function(callback) {
				var out = __out, result;
				__out = [];
				callback.call(this);
				result = __out.join('');
				__out = out;
				return _safe(result);
			};

			(function() {
				_print(_safe('<select name="Q^' + this.model.getFieldName()
						+ '^SL"  class="form-control search-select"  >\n  '));
				_print(_safe('\n<option  value="">请选择</option>\n  '));

				_ref = this.model.getOptions();
				for (_i = 0, _len = _ref.length; _i < _len; _i++) {
					option = _ref[_i];
					_print(_safe('\n    <option value="'));
					_print(option.val);
					_print(_safe('">\n      '));
					_print(option.translated_label || option.label);
					_print(_safe('\n    </option>\n  '));
				}

				_print(_safe('\n</select>\n'));
			}).call(this);

			return __out.join('');
		}).call((function() {
			var obj = {
				escape : function(value) {
					return ('' + value).replace(/&/g, '&amp;').replace(/</g,
							'&lt;').replace(/>/g, '&gt;').replace(/"/g,
							'&quot;');
				},
				safe : _safe
			}, key;
			for (key in __obj)
				obj[key] = __obj[key];
			return obj;
		})());
	};