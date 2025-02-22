import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const jogadorFormModel: FormGroup = new FormBuilder().group({
  nome: ['', Validators.required],
  finalizacao: [
    0,
    [Validators.required, Validators.min(0), Validators.max(100)],
  ],
  passe: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
  drible: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
  velocidade: [
    0,
    [Validators.required, Validators.min(0), Validators.max(100)],
  ],
  defesa: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
  fisico: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
});

export default jogadorFormModel;
