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
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        
        return [
            'title' => ['required', 'string'], 
            'description' => ['required', 'string'], 
            'duration' => ['required', 'integer'], 
            'country' => ['required', 'string'], 
            'poster' => ['required', 'image'], 
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
        
        throw new HttpResponseException(
           
            response()->json(['errors' => $validator->errors()], Response::HTTP_UNPROCESSABLE_ENTITY)
            
        );
    }

}
