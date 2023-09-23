export const useTest = () => {
  class AssertClass {
    value: unknown = null;
    message: string = '';
    data = { json1: null, json2: null } as any;
    code: string = '0';
    group: string = 'default';
    type: 'Api' | 'Valid' = 'Valid';

    constructor(value: unknown) {
      this.reset(value);
    }

    eq = (target: unknown) => {
      this.data = { json1: this.value, json2: target };
      const value = this.value;

      if (value !== target) this.code = 'Fail';

      return this.assertResult('等于');
    };

    neq = (target: unknown) => {
      this.data = { json1: this.value, json2: target };
      const value = this.value;

      if (value === target) this.code = 'Fail';

      return this.assertResult('不等于');
    };

    in = (target: unknown[]) => {
      this.data = { json1: this.value, json2: target };
      const value = this.value;

      if (!target.includes(value)) this.code = 'Fail';

      return this.assertResult('in');
    };

    notIn = (target: unknown[]) => {
      this.data = { json1: this.value, json2: target };
      const value = this.value;

      if (target.includes(value)) this.code = 'Fail';

      return this.assertResult('notIn');
    };

    between = (min: number, max: number) => {
      this.data = { json1: this.value, json2: [min, max] };
      const value = Number(this.value);

      if (value < min) this.code = 'Fail';
      else if (value > max) this.code = 'Fail';

      return this.assertResult('between');
    };

    notBetween = (min: number, max: number) => {
      this.data = { json1: this.value, json2: [min, max] };
      const value = Number(this.value);

      if (value > min && value < max) this.code = 'Fail';

      return this.assertResult('notBetween');
    };

    reset = (value: unknown) => {
      this.value = value;
      this.code = '0';
      this.message = '';
      this.data = { json1: null, json2: null };
    };

    /**
     *
     * @deprecated
     * @param resqeust
     * @param response
     * @returns
     */
    post = (resqeust: any, response: any) => {
      this.data = { json1: resqeust, json2: response };

      return this;
    };

    setMessage = (value: string) => {
      this.message = value;
      return this;
    };

    /**
     *
     * @deprecated
     * @param value
     * @returns
     */
    msg = (value: string) => {
      this.setMessage(value);
      return this;
    };

    query = (value: string) => {
      this.message = value;
      this.type = 'Api';
      return this;
    };

    cmd = (value: string) => {
      this.message = value;
      this.type = 'Api';
      return this;
    };

    valid = (value: string) => {
      this.message = value;
      this.type = 'Valid';
      return this;
    };

    setGroup = (value: string) => {
      this.group = value;
      return this;
    };

    log = (json1: any = null, json2: any = null, shouldFail: boolean = false) => {
      if (json1 !== null && json2 !== null) {
        this.data = { json1, json2 };
        this.code = json2.code;
      }

      const r = {
        isError: shouldFail ? this.code == '0' : this.code != '0',
        code: this.code,
        data: this.data,
        message: this.message,
      };

      if (!logState[this.group]) logState[this.group] = [];

      logState[this.group].push(r);
      return r;
    };

    assertResult = (key: string) => {
      this.data.json1 = {
        实际: this.data.json1,
        期望: {
          [key]: this.data.json2,
        },
      };

      this.data.json2 = null;

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

  const Assert = (value: unknown = null) => {
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

  const stage = (code, func) => {
    return {
      code,
      test: () => {
        AssertGroup(code);
        func();
      },
    };
  };

  return {
    Assert,

    AssertGroup,

    logState,

    stage,
  };
};
