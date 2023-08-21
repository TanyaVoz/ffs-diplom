<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;



class CinemaHallRequest extends FormRequest
{
    public function authorize(): bool
    {
        // В данном случае также разрешаем доступ для всех пользователей.
        return true;
    }

    public function rules(): array
    {
        // Указание правил валидации для каждого поля запроса.
        return [
            'name' => ['required', 'string'], // Обязательное поле с типом "строка".
            'row' => ['integer'], // Поле с типом "целое число".
            'chair' => ['integer'], // Поле с типом "целое число".
            'price_standard' => ['integer'], // Поле с типом "целое число".
            'price_vip' => ['integer'], // Поле с типом "целое число".
            'free' => ['boolean'], // Поле с типом "логическое значение" (true или false).
        ];
    }

    protected function failedValidation(Validator $validator): void
    {
        // Если валидация не прошла, выбрасываем исключение с ответом, содержащим ошибки валидации, и кодом состояния HTTP 422 (Непроцессируемый экземпляр).
        throw new HttpResponseException(
            response()->json(['errors' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY)
        );
    }
}

