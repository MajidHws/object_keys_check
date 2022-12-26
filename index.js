
const original = {
    "plot_number": "12",
    "label": "12/201",
    "establishment_id": 8,
    "establishment_name": "حجاج الداخل",
    "location_id": 1,
    "location_name": "منی",
    "gate": 12,
    "street": 201,
    "is_developed": true,
    "developed_camp_label": "A01",
    "tent_type": null,
    "zone": null,
    "wc_number": null,
    "wc_catagory": null,
    "street_name": null,
    "located_in_gov_area": null,
    "toilets_count": null,
    "internal_water_tapes_count": null,
    "external_water_tapes_count": null,
    "total_water_tapes_count": null,
    "seated_toilet_count": null,
    "urinal_toilets_count": null,
    "showers_count": null,
    "upper_water_tank": null,
    "electrical_meters_number": null,
    "electrical_meter_id": null,
    "subscription_number": null,
    "matric_capacity": null,
}
const check = {
    "plot_number": "97",
    "label": "608/21",
    "establishment_id": 112,
    "establishment_name": "omaromaxomar",
    "location_id": 1,
    "location_name": "",
    "gate": "21",
    "street": "608",
    "is_developed": 0,
    "developed_camp_label": null,
    "tent_type": null,
    "zone": null,
    "wc_number": null,
    "wc_category": null,
    "located_in_gov_area": null,
    "toilets_count": null,
    "internal_water_tapes_count": null,
    "external_water_tapes_count": null,
    "total_water_tapes_count": null,
    "seated_toilets_count": null,
    "urinal_tapes_count": null,
    "showers_count": null,
    "upper water_tank": null,
    "electrical_meters_number": null,
    "electrical_meter_id": null,
    "subscription_number": null,
    "metric_capacity": null
}

const checkKeys = Object.keys(check)
let notFound = []

Object.keys(original).forEach(element => {
    if(!checkKeys.includes(element)) {
        console.log(element);
        notFound.push(element)
    }
});
console.log(`Total: ${notFound.length}`);


