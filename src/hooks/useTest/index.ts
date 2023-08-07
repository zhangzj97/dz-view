export const useTest = () => {
  class AssertClass {
    value: unknown = null;
    message: string = '';
    data: unknown = { json1: null, json2: null };
    code: string = '0';
    group: string = 'default';

    constructor(value: unknown) {
      this.reset(value);
    }

    eq = (target: unknown) => {
      this.data = { json1: this.value, json2: target };
      const value = this.value;

      if (value !== target) this.code = 'Fail';

      return this;
    };

    neq = (target: unknown) => {
      this.data = { json1: this.value, json2: target };
      const value = this.value;

      if (value === target) this.code = 'Fail';

      return this;
    };

    in = (target: unknown[]) => {
      this.data = { json1: this.value, json2: target };
      const value = this.value;

      if (!target.includes(value)) this.code = 'Fail';

      return this;
    };

    notIn = (target: unknown[]) => {
      this.data = { json1: this.value, json2: target };
      const value = this.value;

      if (target.includes(value)) this.code = 'Fail';

      return this;
    };

    between = (min: number, max: number) => {
      this.data = { json1: this.value, json2: [min, max] };
      const value = Number(this.value);

      if (value < min) this.code = 'Fail';
      else if (value > max) this.code = 'Fail';

      return this;
    };

    notBetween = (min: number, max: number) => {
      this.data = { json1: this.value, json2: [min, max] };
      const value = Number(this.value);

      if (value > min && value < max) this.code = 'Fail';

      return this;
    };

    reset = (value: unknown) => {
      this.value = value;
      this.code = '0';
      this.message = '';
      this.data = { json1: null, json2: null };
    };

    post = (resqeust: any, response: any) => {
      this.data = { json1: resqeust, json2: response };

      return this;
    };

    setMessage = (value: string) => {
      this.message = value;
      return this;
    };

    msg = (value: string) => {
      this.setMessage(value);
      return this;
    };

    setGroup = (value: string) => {
      this.group = value;
      return this;
    };

    r = () => {
      const r = {
        isError: this.code != '0',
        code: this.code,
        data: this.data,
        message: this.message,
      };

      if (!logState[this.group]) logState[this.group] = [];

      logState[this.group].push(r);
      return r;
    };
  }

  let single: AssertClass | null = null;

  const Assert = (value: unknown) => {
    if (!single) single = new AssertClass(value);
    single.reset(value);
    return single;
  };

  const AssertGroup = (group: string) => {
    if (!single) single = new AssertClass(null);
    single.setGroup(group);
  };

  const logState = reactive<any>({
    list: [],
  });

  return {
    Assert,

    AssertGroup,

    logState,
  };
};
