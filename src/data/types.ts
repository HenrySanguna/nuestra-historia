export interface Meta {
  nombres: {
    el: string;
    ella: string;
  };
  fecha_primer_contacto: string;
  fecha_inicio_oficial: string;
  pendientes: string[];
}

export interface Cita {
  quien: string;
  texto: string;
}

export interface NarrativaItem {
  fecha: string;
  texto: string;
  cita?: Cita;
  imagen?: string;
  video?: string;
}

export interface ComoEmpezo {
  titulo: string;
  narrativa: NarrativaItem[];
}

export interface MensajeDestacado {
  fecha: string;
  quien: string;
  texto: string;
  imagen?: string;
}

export interface QuienLoDijoItem {
  quien: string;
  texto: string;
}

export interface QuienLoDijo {
  titulo: string;
  items: QuienLoDijoItem[];
}

export interface MomentoUnico {
  titulo: string;
  texto: string;
  imagen?: string;
  video?: string;
}

export interface MasFuertes {
  titulo: string;
  texto: string;
}

export interface CartaFinal {
  titulo: string;
  nota_para_henry?: string;
  contenido?: string;
}

export interface Razones {
  titulo: string;
  items: string[];
}

export interface Vale {
  title: string;
  note: string;
  code: string;
}

export interface Vales {
  titulo: string;
  items: Vale[];
}

export interface ListaFuturo {
  titulo: string;
  items: string[];
}

export interface MediaPendiente {
  nota: string;
  album_colaborativo_url?: string;
}

export interface MomentsData {
  meta: Meta;
  como_empezo: ComoEmpezo;
  mensajes_destacados: MensajeDestacado[];
  quien_lo_dijo: QuienLoDijo;
  momentos_unicos: MomentoUnico[];
  mas_fuertes: MasFuertes;
  carta_final: CartaFinal;
  razones: Razones;
  vales: Vales;
  lista_futuro: ListaFuturo;
  media_pendiente: MediaPendiente;
}
