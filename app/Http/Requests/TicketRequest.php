<?php
namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;

class TicketRequest extends FormRequest
{
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
            'session_id' => ['required', 'integer'], // Обязательное поле с типом "целое число".
            'seats' => ['required', 'array'], // Обязательное поле с типом "массив".
            'seats.*' => ['required', 'integer'], // Обязательное поле с типом "целое число".
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
