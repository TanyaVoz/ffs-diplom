<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;
use Illuminate\Contracts\Validation\Validator;

class FilmRequest extends FormRequest
{

    private mixed $name;
    private mixed $description;
    private mixed $duration;
    private mixed $country;
    private mixed $poster;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        // В данном случае разрешаем доступ для всех пользователей.
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
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

    /**
     * Handle a failed validation attempt.
     *
     * @param  \Illuminate\Contracts\Validation\Validator  $validator
     * @return void
     */
    protected function failedValidation(Validator $validator): void
    {
        // Если валидация не прошла, выбрасываем исключение с ответом, содержащим ошибки валидации, и кодом состояния HTTP 422 (Непроцессируемый экземпляр).
        throw new HttpResponseException(
           
            response()->json(['errors' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY)
            
        );
    }

}
