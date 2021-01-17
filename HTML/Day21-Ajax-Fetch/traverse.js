const data={
    "destination_addresses": ["Mysuru, Karnataka, India"],
    "origin_addresses": ["Bengaluru, Karnataka, India"],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "144 km",
                        "value": 144329
                    },
                    "duration": {
                        "text": "3 hours 10 mins",
                        "value": 11389
                    },
                    "duration_in_traffic": {
                        "text": "3 hours 22 mins",
                        "value": 12142
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}

console.log(data.rows[0].elements[0].status)