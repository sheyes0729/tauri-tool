export interface CoordinateItemInterface {
	code: number
	defs: string
	wkt?: string
	remark: string
}

export interface CoordinateParentInterface {
	label: string
	code: number
	remark: string
	value: string
	list: Array<CoordinateItemInterface>
}

export const coordinate: Array<CoordinateParentInterface> = [
	{
		label: '世界坐标',

		code: 4326,
		remark: 'WGS 84 -- WGS84 - World Geodetic System 1984, used in GPS,EPSG:4326',
		value: '',
		list: [
			{
				code: 4326,
				defs: '+proj=longlat +datum=WGS84 +no_defs',
				wkt: 'GEOGCS["GCS_WGS_1984",DATUM["D_WGS_1984",SPHEROID["WGS_1984",6378137.0,298.257223563]],PRIMEM["Greenwich",0.0],UNIT["Degree",0.0174532925199433]]',
				remark: 'WGS 84 -- WGS84 - World Geodetic System 1984, used in GPS',
			},
			{
				code: 3857,
				defs: '+proj=merc +a=6378137 +b=6378137 +lat_ts=0 +lon_0=0 +x_0=0 +y_0=0 +k=1 +units=m +nadgrids=@null +wktext +no_defs +type=crs',
				remark: 'WGS 84 / Pseudo-Mercator -- Spherical Mercator, Google Maps, OpenStreetMap, Bing, ArcGIS, ESRI',
			},
		],
	},
	{
		label: '北京54坐标',
		code: 4214,
		remark: 'Beijing 1954,EPSG:4214',
		value: '',
		list: [
			{
				code: 4214,
				defs: '+proj=longlat +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +no_defs',
				remark: 'Beijing 1954',
			},
			{
				code: 21463,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 135E',
			},
			{
				code: 21462,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 129E',
			},
			{
				code: 21461,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 123E',
			},
			{
				code: 21460,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 117E',
			},
			{
				code: 21459,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 111E',
			},
			{
				code: 21458,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 105E',
			},
			{
				code: 21457,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 99E',
			},
			{
				code: 21456,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 93E',
			},
			{
				code: 21455,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 87E',
			},
			{
				code: 21454,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 81E',
			},
			{
				code: 21453,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger CM 75E',
			},
			{
				code: 21423,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 23',
			},
			{
				code: 21422,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 22',
			},
			{
				code: 21421,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 21',
			},
			{
				code: 21420,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 20',
			},
			{
				code: 21419,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 19',
			},
			{
				code: 21418,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 18',
			},
			{
				code: 21417,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 17',
			},
			{
				code: 21416,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 16',
			},
			{
				code: 21415,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 15',
			},
			{
				code: 21414,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 14',
			},
			{
				code: 21413,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / Gauss-Kruger zone 13',
			},
			{
				code: 2442,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 135E',
			},
			{
				code: 2441,
				defs: '+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 132E',
			},
			{
				code: 2440,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 129E',
			},
			{
				code: 2439,
				defs: '+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 126E',
			},
			{
				code: 2438,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 123E',
			},
			{
				code: 2437,
				defs: '+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 120E',
			},
			{
				code: 2436,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 117E',
			},
			{
				code: 2435,
				defs: '+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 114E',
			},
			{
				code: 2434,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 111E',
			},
			{
				code: 2433,
				defs: '+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 108E',
			},
			{
				code: 2432,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 105E',
			},
			{
				code: 2431,
				defs: '+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 102E',
			},
			{
				code: 2430,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 99E',
			},
			{
				code: 2429,
				defs: '+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 96E',
			},
			{
				code: 2428,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 93E',
			},
			{
				code: 2427,
				defs: '+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 90E',
			},
			{
				code: 2426,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 87E',
			},
			{
				code: 2425,
				defs: '+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 84E',
			},
			{
				code: 2424,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 81E',
			},
			{
				code: 2423,
				defs: '+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 78E',
			},
			{
				code: 2422,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger CM 75E',
			},
			{
				code: 2421,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 45',
			},
			{
				code: 2420,
				defs: '+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 44',
			},
			{
				code: 2419,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 43',
			},
			{
				code: 2418,
				defs: '+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 42',
			},
			{
				code: 2417,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 41',
			},
			{
				code: 2416,
				defs: '+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 40',
			},
			{
				code: 2415,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 39',
			},
			{
				code: 2414,
				defs: '+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 38',
			},
			{
				code: 2413,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 37',
			},
			{
				code: 2412,
				defs: '+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 36',
			},
			{
				code: 2411,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 35',
			},
			{
				code: 2410,
				defs: '+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 34',
			},
			{
				code: 2409,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 33',
			},
			{
				code: 2408,
				defs: '+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 32',
			},
			{
				code: 2407,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 31',
			},
			{
				code: 2406,
				defs: '+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 30',
			},
			{
				code: 2405,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 29',
			},
			{
				code: 2404,
				defs: '+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 28',
			},
			{
				code: 2403,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 27',
			},
			{
				code: 2402,
				defs: '+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 26',
			},
			{
				code: 2401,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=krass +towgs84=15.8,-154.4,-82.3,0,0,0,0 +units=m +no_defs',
				remark: 'Beijing 1954 / 3-degree Gauss-Kruger zone 25',
			},
		],
	},
	{
		label: '西安80坐标',
		code: 4610,
		remark: 'Xian 1980,EPSG:4610',
		value: '',
		list: [
			{
				code: 4610,
				defs: '+proj=longlat +a=6378140 +b=6356755.288157528 +no_defs',
				remark: 'Xian 1980',
			},

			{
				code: 2390,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 135E',
			},
			{
				code: 2389,
				defs: '+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 132E',
			},
			{
				code: 2388,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 129E',
			},
			{
				code: 2387,
				defs: '+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 126E',
			},
			{
				code: 2386,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 123E',
			},
			{
				code: 2385,
				defs: '+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 120E',
			},
			{
				code: 2384,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 117E',
			},
			{
				code: 2383,
				defs: '+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 114E',
			},
			{
				code: 2382,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 111E',
			},
			{
				code: 2381,
				defs: '+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 108E',
			},
			{
				code: 2380,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 105E',
			},
			{
				code: 2379,
				defs: '+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 102E',
			},
			{
				code: 2378,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 99E',
			},
			{
				code: 2377,
				defs: '+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 96E',
			},
			{
				code: 2376,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 93E',
			},
			{
				code: 2375,
				defs: '+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 90E',
			},
			{
				code: 2374,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 87E',
			},
			{
				code: 2373,
				defs: '+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 84E',
			},
			{
				code: 2372,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs ',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 81E',
			},
			{
				code: 2371,
				defs: '+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 78E',
			},
			{
				code: 2370,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger CM 75E',
			},
			{
				code: 2369,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 45',
			},
			{
				code: 2368,
				defs: '+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 44',
			},
			{
				code: 2367,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 43',
			},
			{
				code: 2366,
				defs: '+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 42',
			},
			{
				code: 2365,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 41',
			},
			{
				code: 2364,
				defs: '+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 40',
			},
			{
				code: 2363,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 39',
			},
			{
				code: 2362,
				defs: '+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 38',
			},
			{
				code: 2361,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 37',
			},
			{
				code: 2360,
				defs: '+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 36',
			},
			{
				code: 2359,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 35',
			},
			{
				code: 2358,
				defs: '+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 34',
			},
			{
				code: 2357,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 33',
			},
			{
				code: 2356,
				defs: '+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 32',
			},
			{
				code: 2355,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 31',
			},
			{
				code: 2354,
				defs: '+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 30',
			},
			{
				code: 2353,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 29',
			},
			{
				code: 2352,
				defs: '+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 28',
			},
			{
				code: 2351,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 27',
			},
			{
				code: 2350,
				defs: '+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 26',
			},
			{
				code: 2349,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / 3-degree Gauss-Kruger zone 25',
			},
			{
				code: 2348,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 135E',
			},
			{
				code: 2347,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 129E',
			},
			{
				code: 2346,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 123E',
			},
			{
				code: 2345,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 117E',
			},
			{
				code: 2344,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 111E',
			},
			{
				code: 2343,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 105E',
			},
			{
				code: 2342,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 99E',
			},
			{
				code: 2341,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 93E',
			},
			{
				code: 2340,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 87E',
			},
			{
				code: 2339,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 81E',
			},
			{
				code: 2338,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger CM 75E',
			},
			{
				code: 2337,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger zone 23',
			},
			{
				code: 2336,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger zone 22',
			},
			{
				code: 2335,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger zone 21',
			},
			{
				code: 2333,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger zone 19',
			},
			{
				code: 2332,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger zone 18',
			},
			{
				code: 2331,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger zone 17',
			},
			{
				code: 2330,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger zone 16',
			},
			{
				code: 2329,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger zone 15',
			},
			{
				code: 2328,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger zone 14',
			},
			{
				code: 2327,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +a=6378140 +b=6356755.288157528 +units=m +no_defs',
				remark: 'Xian 1980 / Gauss-Kruger zone 13',
			},
		],
	},
	{
		label: '2000坐标系',
		code: 4490,
		remark: 'China Geodetic Coordinate System 2000,EPSG:4490',
		value: '',
		list: [
			{
				code: 4480,
				defs: '+proj=longlat +ellps=GRS80 +no_defs +type=crs',
				remark: 'China Geodetic Coordinate System 2000',
			},
			{
				code: 4490,
				defs: '+proj=longlat +ellps=GRS80 +no_defs',
				remark: 'China Geodetic Coordinate System 2000',
			},
			{
				code: 4479,
				defs: '+proj=geocent +ellps=GRS80 +units=m +no_defs',
				remark: 'China Geodetic Coordinate System 2000',
			},
			{
				code: 4554,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 135E',
			},
			{
				code: 4553,
				defs: '+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 132E',
			},
			{
				code: 4552,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 129E',
			},
			{
				code: 4551,
				defs: '+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 126E',
			},
			{
				code: 4550,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 123E',
			},
			{
				code: 4549,
				defs: '+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 120E',
			},
			{
				code: 4548,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 117E',
			},
			{
				code: 4547,
				defs: '+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 114E',
			},
			{
				code: 4546,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 111E',
			},
			{
				code: 4545,
				defs: '+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 108E',
			},
			{
				code: 4544,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 105E',
			},
			{
				code: 4543,
				defs: '+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 102E',
			},
			{
				code: 4542,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 99E',
			},
			{
				code: 4541,
				defs: '+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 96E',
			},
			{
				code: 4540,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 93E',
			},
			{
				code: 4539,
				defs: '+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 90E',
			},
			{
				code: 4538,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 87E',
			},
			{
				code: 4537,
				defs: '+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 84E',
			},
			{
				code: 4536,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 81E',
			},
			{
				code: 4535,
				defs: '+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 78E',
			},
			{
				code: 4534,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger CM 75E',
			},
			{
				code: 4533,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=45500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 45',
			},
			{
				code: 4532,
				defs: '+proj=tmerc +lat_0=0 +lon_0=132 +k=1 +x_0=44500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 44',
			},
			{
				code: 4531,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=43500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 43',
			},
			{
				code: 4530,
				defs: '+proj=tmerc +lat_0=0 +lon_0=126 +k=1 +x_0=42500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 42',
			},
			{
				code: 4529,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=41500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 41',
			},
			{
				code: 4528,
				defs: '+proj=tmerc +lat_0=0 +lon_0=120 +k=1 +x_0=40500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 40',
			},
			{
				code: 4527,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=39500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 39',
			},
			{
				code: 4526,
				defs: '+proj=tmerc +lat_0=0 +lon_0=114 +k=1 +x_0=38500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 38',
			},
			{
				code: 4525,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=37500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 37',
			},
			{
				code: 4524,
				defs: '+proj=tmerc +lat_0=0 +lon_0=108 +k=1 +x_0=36500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 36',
			},
			{
				code: 4523,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=35500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 35',
			},
			{
				code: 4522,
				defs: '+proj=tmerc +lat_0=0 +lon_0=102 +k=1 +x_0=34500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 34',
			},
			{
				code: 4521,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=33500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 33',
			},
			{
				code: 4520,
				defs: '+proj=tmerc +lat_0=0 +lon_0=96 +k=1 +x_0=32500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 32',
			},
			{
				code: 4519,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=31500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 31',
			},
			{
				code: 4518,
				defs: '+proj=tmerc +lat_0=0 +lon_0=90 +k=1 +x_0=30500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 30',
			},
			{
				code: 4517,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=29500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 29',
			},
			{
				code: 4516,
				defs: '+proj=tmerc +lat_0=0 +lon_0=84 +k=1 +x_0=28500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 28',
			},
			{
				code: 4515,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=27500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 27',
			},
			{
				code: 4514,
				defs: '+proj=tmerc +lat_0=0 +lon_0=78 +k=1 +x_0=26500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 26',
			},
			{
				code: 4513,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=25500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / 3-degree Gauss-Kruger zone 25',
			},
			{
				code: 4512,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 135E',
			},
			{
				code: 4511,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 129E',
			},
			{
				code: 4510,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 123E',
			},
			{
				code: 4509,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 117E',
			},
			{
				code: 4508,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 111E',
			},
			{
				code: 4507,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 105E',
			},
			{
				code: 4506,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 99E',
			},
			{
				code: 4505,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 93E',
			},
			{
				code: 4504,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 87E',
			},
			{
				code: 4503,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 81E',
			},
			{
				code: 4502,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger CM 75E',
			},
			{
				code: 4501,
				defs: '+proj=tmerc +lat_0=0 +lon_0=135 +k=1 +x_0=23500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 23',
			},
			{
				code: 4500,
				defs: '+proj=tmerc +lat_0=0 +lon_0=129 +k=1 +x_0=22500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 22',
			},
			{
				code: 4499,
				defs: '+proj=tmerc +lat_0=0 +lon_0=123 +k=1 +x_0=21500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 21',
			},
			{
				code: 4498,
				defs: '+proj=tmerc +lat_0=0 +lon_0=117 +k=1 +x_0=20500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 20',
			},
			{
				code: 4497,
				defs: '+proj=tmerc +lat_0=0 +lon_0=111 +k=1 +x_0=19500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 19',
			},
			{
				code: 4496,
				defs: '+proj=tmerc +lat_0=0 +lon_0=105 +k=1 +x_0=18500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 18',
			},
			{
				code: 4495,
				defs: '+proj=tmerc +lat_0=0 +lon_0=99 +k=1 +x_0=17500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 17',
			},
			{
				code: 4494,
				defs: '+proj=tmerc +lat_0=0 +lon_0=93 +k=1 +x_0=16500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 16',
			},
			{
				code: 4493,
				defs: '+proj=tmerc +lat_0=0 +lon_0=87 +k=1 +x_0=15500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 15',
			},
			{
				code: 4492,
				defs: '+proj=tmerc +lat_0=0 +lon_0=81 +k=1 +x_0=14500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 14',
			},
			{
				code: 4491,
				defs: '+proj=tmerc +lat_0=0 +lon_0=75 +k=1 +x_0=13500000 +y_0=0 +ellps=GRS80 +units=m +no_defs',
				remark: 'CGCS2000 / Gauss-Kruger zone 13',
			},
		],
	},
]
