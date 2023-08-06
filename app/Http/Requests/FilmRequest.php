<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;
use Illuminate\Contracts\Validation\Validator;

class FilmRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        // В данном случае разрешаем доступ для всех пользователей.
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        // Указание правил валидации для каждого поля запроса.
        return [
            'title' => ['required', 'string'], // Обязательное поле с типом "строка".
            'description' => ['required', 'string'], // Обязательное поле с типом "строка".
            'duration' => ['required', 'integer'], // Обязательное поле с типом "целое число".
            'country' => ['required', 'string'], // Обязательное поле с типом "строка".
            'poster' => ['required', 'image'], // Обязательное поле с типом "изображение".
        ];
    }

    protected function failedValidation(Validator $validator): void
    {
        // Если валидация не прошла, выбрасываем исключение с ответом содержащим ошибки валидации и кодом состояния HTTP 422 (Непроцессируемый экземпляр).
        throw new HttpResponseException(
            response($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY)
        );
    }
}
