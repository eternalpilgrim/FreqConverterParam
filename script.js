const data_for_parsing ={"220220": `{"settings":[
	{
		"title" : "Сброс к заводским настройкам:",
		"type" : "radio",
		"name" : "F8.03",
		"variant":[
			{
				"title":"да",
				"value" : 1,
				"selected" : false
			},
			{
				"title":"нет",
				"value" : 0,
				"selected" : true
			}
		]
	},
	{
		"title" : "Тип управления:",
		"type" : "radio",
		"name" : "F0.02",
		"variant":[
			{
				"title":"с частотника",
				"value" : 0,
				"selected" : false
			},
			{
				"title":"с пульта",
				"value" : 1,
				"selected" : true
			}
		]
	},
	{
		"title" : "Регулировка частоты:",
		"type" : "radio",
		"name" : "F0.03",
		"variant":[
			{
				"title":"с панели частотника",
				"value" : 0,
				"selected" : true
			},
			{
				"title":"с внешнего потенциометра",
				"value" : 3,
				"selected" : false
			}
		]
	},
	{
		"title" : "Нужен ли реверс?",
		"type" : "radio",
		"name" : "F2.14",
		"variant":[
			{
				"title":"да",
				"value" : 4,
				"selected" : true
			},
			{
				"title":"нет",
				"value" : 0,
				"selected" : false
			}
		]
	},
	{
		"title" : "Двигатель: напряжение, В",
		"type" : "number",
		"name" : "F4.00",
		"value": "220"
	},
	{
		"title" : "Двигатель: ток, А",
		"type" : "number",
		"name" : "F4.01",
		"value": "0"
	},
	{
		"title" : "Двигатель: число оборотов (номинальное)",
		"type" : "number",
		"name" : "F4.02",
		"value": "0"
	},
	{
		"title" : "Двигатель: частота (номинальная), Гц",
		"type" : "number",
		"name" : "F4.03",
		"value": "0"
	},
	{
		"title" : "Параметры работы: максимальная частота, Гц",
		"type" : "number",
		"name" : "F0.04, F0.05",
		"value": "0"
	},
	{
		"title" : "Параметры работы: нижний предел частоты, Гц",
		"type" : "number",
		"name" : "F0.06",
		"value": "0"
	},
	{
		"title" : "Параметры работы: время ускорения, с",
		"type" : "number",
		"name" : "F0.10",
		"value": "0"
	},
	{
		"title" : "Параметры работы: время торможения, с",
		"type" : "number",
		"name" : "F0.11",
		"value": "0"
	},
	{
		"title" : "Параметры работы: буст, 0-30%",
		"type" : "number",
		"name" : "F0.14",
		"value": "0"
	},
	{
		"title" : "Параметры работы: частота среза крутящего момента (0-50 Гц)",
		"type" : "number",
		"name" : "F0.15",
		"value": "0"
	},
	{
		"title" : "Параметры работы: несущая частота (2-8 кГц)",
		"type" : "number",
		"name" : "F0.16",
		"value": "0"
	}
	]}`,
	
	"380380" :`{"settings":[
	{
		"title" : "Сброс к заводским настройкам:",
		"type" : "radio",
		"name" : "F0.63",
		"variant":[
			{
				"title":"да",
				"value" : 1,
				"selected" : false
			},
			{
				"title":"нет",
				"value" : 0,
				"selected" : true
			}
		]
	},
	{
		"title" : "Тип управления:",
		"type" : "radio",
		"name" : "F0.01",
		"variant":[
			{
				"title":"с частотника",
				"value" : 0,
				"selected" : false
			},
			{
				"title":"с пульта",
				"value" : 1,
				"selected" : true
			}
		]
	},
	{
		"title" : "Регулировка частоты:",
		"type" : "radio",
		"name" : "F0.02",
		"variant":[
			{
				"title":"с панели частотника",
				"value" : 0,
				"selected" : true
			},
			{
				"title":"с внешнего потенциометра",
				"value" : 2,
				"selected" : false
			}
		]
	},
	{
		"title" : "Нужен ли реверс?",
		"type" : "radio",
		"name" : "F0.21",
		"variant":[
			{
				"title":"да",
				"value" : 4,
				"selected" : true
			},
			{
				"title":"нет",
				"value" : 0,
				"selected" : false
			}
		]
	},
	{
		"title" : "Двигатель: напряжение, В",
		"type" : "number",
		"name" : "F0.49",
		"value": "380"
	},
	{
		"title" : "Двигатель: ток, А",
		"type" : "number",
		"name" : "F0.52",
		"value": "0"
	},
	{
		"title" : "Двигатель: число оборотов (номинальное)",
		"type" : "number",
		"name" : "F0.51",
		"value": "0"
	},
	{
		"title" : "Двигатель: частота (номинальная), Гц",
		"type" : "number",
		"name" : "F0.50",
		"value": "0"
	},
	{
		"title" : "Параметры работы: максимальная частота, Гц",
		"type" : "number",
		"name" : "F0.06, F0.07",
		"value": "0"
	},
	{
		"title" : "Параметры работы: нижний предел частоты, Гц",
		"type" : "number",
		"name" : "F0.08",
		"value": "0"
	},
	{
		"title" : "Параметры работы: время ускорения, с",
		"type" : "number",
		"name" : "F0.09",
		"value": "0"
	},
	{
		"title" : "Параметры работы: время торможения, с",
		"type" : "number",
		"name" : "F0.10",
		"value": "0"
	},
	{
		"title" : "Параметры работы: буст, 0-30%",
		"type" : "number",
		"name" : "F0.11",
		"value": "0"
	},
	{
		"title" : "Параметры работы: частота среза крутящего момента (0-50 Гц)",
		"type" : "number",
		"name" : "F0.12",
		"value": "0"
	},
	{
		"title" : "Параметры работы: несущая частота (3-8 кГц)",
		"type" : "number",
		"name" : "F0.13",
		"value": "0"
	}
	]}`};
	
// div, в котором запрашиваются входные данные
let input_container = document.getElementById('input_container');
// div, куда выводятся параметры для настройки частотника
let output_container = document.getElementById('output_container');
// селект с выбором типа частотника
let select_fc = document.getElementById('select_fc');
// параметры, которые надо будет задать в частотнике
let out_params = [];

select_fc.addEventListener('change', function(src) {
	let parsedData = JSON.parse(data_for_parsing[src.target.value]);

	input_container.innerHTML="";
	output_container.innerHTML="";
	parsedData.settings.forEach(param => {
	
		let param_title = document.createElement('label');
		input_container.appendChild(param_title);
		param_title.innerText = param.title;

		if (param.type === "radio")
		{
			input_container.appendChild(document.createElement('br'));
			param.variant.forEach(variant => {
				let radiobtn = document.createElement('input');
				radiobtn.id = param.name+"_" +variant.value;
				radiobtn.name = param.name;
				radiobtn.type = 'radio';
				radiobtn.checked = variant.selected;
				radiobtn.value = variant.value;
			
				let radiobtn_label = document.createElement('label');
				radiobtn_label.innerText = variant.title;
							
				input_container.appendChild(radiobtn);
				input_container.appendChild(radiobtn_label);
				input_container.appendChild(document.createElement('br'));
			});
		}
		if (param.type === "number")
		{
			let number_input = document.createElement('input');
			number_input.id = param.name+"number";
			number_input.name = param.name;
			number_input.type = 'number';
			
			input_container.appendChild(number_input);
			input_container.appendChild(document.createElement('br'));		
		}
	});

	let btn_get_out = document.createElement('button');
	btn_get_out.innerText = "Сформировать";
	btn_get_out.addEventListener('click', function(src) {
		output_container.innerHTML = "";
		out_params = [];

		input_container.childNodes.forEach(node => {
			if ((node.type==="number") || ((node.type==="radio") && node.checked))
			{
				out_params.push(node.name+ " = " + node.value);
			}
		});
		// первый параметр - это сброс к заводским настройкам - его нужно задавать в первую очередь
		let reset_param = out_params.shift();
		reset_param = reset_param + " (сброс к заводским настройкам)"
		//сортируем по имени, чтобы при вводе параметров в частотник идти последовательно по параметрам
		out_params.sort();
		out_params.unshift(reset_param);
		out_params.forEach(out_param => {
			let param = document.createElement('p');
			param.innerText = out_param;
			output_container.appendChild(param)
		});
	});
	input_container.appendChild(btn_get_out);	
});

select_fc.value = "0";