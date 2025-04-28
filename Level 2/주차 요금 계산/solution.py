import math


def solution(fees, records):
    car_fee_dict = {}
    car_in_dict = {}
    car_time_dict = {}

    for record in records:
        time, car_number, in_out_type = record.split(" ")

        if in_out_type == "IN":
            car_in_dict[car_number] = time_to_minutes(time)
        else:
            in_time = car_in_dict[car_number]
            out_time = time_to_minutes(time)
            diff_time = out_time - in_time

            if car_number not in car_time_dict:
                car_time_dict[car_number] = 0

            car_time_dict[car_number] += diff_time
            del car_in_dict[car_number]

    for car_number, in_time in car_in_dict.items():
        out_time = time_to_minutes("23:59")
        diff_time = out_time - in_time

        if car_number not in car_time_dict:
            car_time_dict[car_number] = 0

        car_time_dict[car_number] += diff_time

    for car_number, diff_time in car_time_dict.items():
        car_fee_dict[car_number] = calculate_fee(diff_time, fees)

    return [fee for _, fee in sorted(car_fee_dict.items(), key=lambda x: x[0])]


def time_to_minutes(time):
    hours, minutes = time.split(":")
    return int(hours) * 60 + int(minutes)


def calculate_fee(diff_time, fees):
    default_minutes, default_fee, unit_minutes, unit_fee = fees

    return (
        default_fee
        if diff_time <= default_minutes
        else default_fee
        + (math.ceil((diff_time - default_minutes) / unit_minutes) * unit_fee)
    )
